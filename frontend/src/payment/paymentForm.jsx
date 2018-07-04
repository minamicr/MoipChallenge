import React from 'react'


export default props => (
    <div className="paymentForm">
        <form>
            <div className="form-row hidden">
                <input type="hidden"
                    id="clientID"
                    onChange={props.handleChange}
                    value={props.clientID} />

                <input type="hidden"
                    id="buyerID"
                    onChange={props.handleChange}
                    value={props.buyerID} />
            </div>

            <h3 className='mt-3'>Client</h3>
            <div className="form-group row pb-2">
                <label htmlFor="clientName" className="col-2 col-form-label">Cliente</label>
                <div className="col-8 input-group">
                    <input type="text" 
                        className="form-control"
                        id="clientName"
                        onChange={props.handleChange}
                        value={props.clientName} />
                </div>
                <div className="col-2 input-group">
                        <button type="submit" className="btn btn-primary" 
                            onClick={props.handleAddClient}>Incluir Cliente</button>
                </div>
            </div>

            <hr/>

            <h3>Buyer</h3>
            <div className="form-group row pb-2">
                <label htmlFor="clientName" className="col-2 col-form-label">Comprador</label>
                <div className="col-8 input-group">
                    <input type="text" 
                        className="form-control"
                        id="buyerName"
                        onChange={props.handleChange}
                        value={props.buyerName} />
                </div>
            </div>

            <div className="form-group row pb-2">
                <label htmlFor="buyerCPF" className="col-2 col-form-label">CPF</label>
                <div className="col-4 input-group">
                    <input type="text" 
                        className="form-control"
                        id="buyerCPF"
                        value={props.buyerCPF}
                        onChange={props.handleChange} />
                </div>
                <label htmlFor="buyerEmail" className="col-1 col-form-label">E-mail</label>
                <div className="col-3 input-group">
                    <input type="text" 
                        className="form-control"
                        id="buyerEmail"
                        value={props.buyerEmail} 
                        onChange={props.handleChange}/>

                </div>
                <div className="col-2 input-group">
                    <button type="submit" className="btn btn-primary" 
                        onClick={props.handleAddBuyer}>Incluir Comprador</button>
                </div>
            </div>  

            <hr/>

            <h3>Payment</h3>

            <div className="form-group row pb-2">
                <label htmlFor="clientName" className="col-3 col-form-label">Cliente</label>
                <div className="col-3 input-group" >
                    <select id="client" 
                        value={props.selectedOption}
                        onChange={props.handleChangeSelectClient}>
                        <option id=''>Selecione o cliente</option>
                        {props.listClient.map((client) => <option key={client._id} id={client._id}>{client.clientName}</option>)}
           
                    </select>
                </div>

                <label htmlFor="buyerName" className="col-1 col-form-label">Comprador</label>
                <div className="col-5 input-group" >
                    <select id="buyer" 
                        value={props.selectedOption}
                        onChange={props.handleChangeSelectBuyer}>
                        <option id=''>Selecione o comprador</option>
                        {props.listBuyer.map((buyer) => <option key={buyer._id} id={buyer._id}>{buyer.buyerName}</option>)}
           
                    </select>
                </div>
            </div>

            <div className="form-group row pb-2">
                <label htmlFor="amount" className="col-3 col-form-label">Valor</label>
                <div className="col-3 input-group">
                    <input type="text" 
                        className="form-control"
                        id="amount"
                        value={props.amount} 
                        onChange={props.handleChange}/>
                </div>                
            </div>

            <div className="form-group row pb-2">
                <div className="col-3">Selecione o tipo de pagamento</div>
                <div className="col-1">
                    <input type="radio" 
                        name="paymentType" 
                        value="Boleto"
                        checked={props.paymentType === 'Boleto'}
                        onChange={props.handleChange} />Boleto
                </div>
                <div className="col-8">
                    <input type="radio" 
                        name="paymentType" 
                        value="Credit Card" 
                        checked={props.paymentType === 'Credit Card'}
                        onChange={props.handleChange} />Cartão de Crédito 
                </div>            
            </div>

           
            <div className={props.paymentType == 'Boleto'?'invisible':''} id="creditCard">
                
                <div className="form-group row pb-2">
                    <label htmlFor="cardHolderName" className="col-3 col-form-label">Nome no cartão de crédito</label>
                    <div className="col-3 input-group">
                        <input type="text" 
                            className="form-control"
                            id="cardHolderName"
                            value={props.cardHolderName} 
                            onChange={props.handleChange}/>
                    </div>    
                    <label htmlFor="cardNumber" className="col-2 col-form-label">Número do cartão</label>
                    <div className="col-4 input-group">
                        <input type="text" 
                            className="form-control"
                            id="cardNumber"
                            value={props.cardNumber} 
                            onChange={props.handleChange}/>
                    </div>                      
                </div>

                <div className="form-group row pb-2">
                    <label htmlFor="cardExpirationDate" className="col-3 col-form-label">Data de validade do cartão</label>
                    <div className="col-3 input-group">
                        <input type="text" 
                            className="form-control"
                            id="cardExpirationDate"
                            value={props.cardExpirationDate} 
                            onChange={props.handleChange}/>
                    </div>                

                    <label htmlFor="cardCVV" className="col-2 col-form-label">CVV</label>
                    <div className="col-4 input-group">
                        <input type="text" 
                            className="form-control"
                            id="cardCVV"
                            placeholder="número atrás do cartão"
                            value={props.cardCVV} 
                            onChange={props.handleChange}/>
                    </div>
                </div>
            </div>

            <div className="form-row mb-4">
                <div className="col-12 d-flex">
                    <button type="submit" className="btn btn-primary" 
                        onClick={props.handleAddUpdate}>Incluir Pagamento</button>
                    <button type="reset" className="btn btn-secondary ml-2"
                        onClick={props.cleanFields}>Cancelar</button>
                </div>
            </div>                    

        </form>

    </div>
)