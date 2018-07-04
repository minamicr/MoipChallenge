
import axios from 'axios'
import React, { Component } from 'react'

import PaymentForm from './paymentForm'
import PaymentList from './paymentList'

const URL_Client = 'http://localhost:3003/api/clients'
const URL_Buyer = 'http://localhost:3003/api/buyers'
const URL_Payment = 'http://localhost:3003/api/payments'

export default class Payment extends Component {

    constructor(props) {
        super(props)
        this.state = { clientID: '', clientName: '', 
                buyer: '',
                buyerID: '',
                buyerName: '', buyerCPF: '', buyerEmail: '',
                amount: '', paymentType: 'Boleto',
                cardHolderName: '', cardNumber: '', 
                cardExpirationDate: '', cardCVV: '', 
                listPayment: [], listBuyer: [], listClient: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeSelectBuyer = this.handleChangeSelectBuyer.bind(this)
        this.handleChangeSelectClient = this.handleChangeSelectClient.bind(this)
        this.handleAddUpdate = this.handleAddUpdate.bind(this)
        this.handleList = this.getPayments.bind(this)
        this.handleAddClient = this.handleAddClient.bind(this)
        this.handleAddBuyer = this.handleAddBuyer.bind(this)
        this.cleanFields = this.cleanFields.bind(this)
        this.getBuyers = this.getBuyers.bind(this)
        this.getClients = this.getClients.bind(this)
        this.getPayments = this.getPayments.bind(this)
        
        
        this.getBuyers()
        this.getClients()
        this.getPayments()

    }
   
    getBuyers(){
        axios.get(`${URL_Buyer}?sort=buyerName`)
        .then(resp => this.setState({...this.state
            , listBuyer: resp.data}))
        .catch(error => {
            alert('ATENÇÃO: ocorreu um erro, não foi possível listar os compradores.')
        })

    }

    getClients(){
        axios.get(`${URL_Client}?sort=clientName`)
        .then(resp => this.setState({...this.state
            , listClient: resp.data}))
        .catch(error => {
            alert('ATENÇÃO: ocorreu um erro, não foi possível listar os clientes.')
        })

    }

    getPayments() {
        axios.get(`${URL_Payment}?sort=-includeDate`)
            .then(resp => this.setState({...this.state,
                listPayment: resp.data}))
            .catch(error => {
                    alert('ATENÇÃO: ocorreu um erro, não foi possível listar os pagamentos.')
            })
    }

    handleChangeSelectClient(e){
        const selectedIndex = e.target.options.selectedIndex
        this.setState({clientID: e.target.options[selectedIndex].id})

    }

    handleChangeSelectBuyer(e){
        const selectedIndex = e.target.options.selectedIndex
        this.setState({buyerID: e.target.options[selectedIndex].id,
                        buyerName: e.target.options[selectedIndex].value})

    }

    handleChange(e) {
        let change = {}
        if (e.target.id == ''){
            change = { [e.target.name]: e.target.value }
        } else {
            change = { [e.target.id]: e.target.value }
        }
        this.setState(change)
    }

    handleAddBuyer() {
        const buyerName = this.state.buyerName
        const buyerEmail = this.state.buyerEmail
        const buyerCPF = this.state.buyerCPF

        axios.post(`${URL_Buyer}`, {
            buyerName,
            buyerEmail,
            buyerCPF
        }) 
        .then(response => console.log(`Comprador ${buyerName} incluído [ID ${response.data._id}]`))
        .catch(error => {
            alert(`ATENÇÃO: ocorreu um erro na inclusão do comprador !`)
        })
    }

    handleAddClient() {
        const clientName = this.state.clientName
        axios.post(`${URL_Client}`, {
            clientName
        }) 
        .then(response => console.log(`Cliente ${clientName} incluído [ID ${response.data._id}]`))
        .catch(error => {
            alert(`ATENÇÃO: ocorreu um erro na inclusão do cliente !`)
        })
    }

    handleAddUpdate() {
        const buyerID = this.state.buyerID
        const buyerName = this.state.buyerName
        const clientID = this.state.clientID
        const amount = this.state.amount
        const paymentType = this.state.paymentType
        const cardHolderName= this.state.cardHolderName
        const cardNumber = this.state.cardNumber
        const cardExpirationDate = this.state.cardExpirationDate
        const cardCVV = this.state.cardCVV
        const boletoNumber = paymentType === 'Boleto'?this.createBoletoNumber():''

        axios.post(`${URL_Payment}`, { 
            buyer: buyerID, 
            buyerName,
            client: clientID, 
            amount, 
            paymentType,
            boletoNumber,
            cardHolderName, 
            cardNumber, 
            cardExpirationDate, 
            cardCVV 
        })
        .then(resp => console.log(`Pagamento ${resp.data._id}`))
        .catch(error => {
                alert('ATENÇÃO: ocorreu um erro, não foi possível incluir o pagamento.')
        })
        
    }

    cleanFields(){
        this.setState({
            buyerID: ''
            , clientID: ''
            , clientName: ''
            , buyerName: ''
            , buyerCPF: ''
            , buyerEmail: ''
            , amount: ''
            , paymentType: 'Boleto'
            , cardHolderName: ''
            , cardNumber: ''
            , cardExpirationDate: ''
            , cardCVV: ''
        }) 

    }

    createBoletoNumber(){
        return ((Date.now() + Math.random()).toString()).substring(0,12)
    }
    
    render() {
        return (
            <div>

                <PaymentForm 
                    clientID={this.state.clientID}
                    buyerID={this.state.buyerID}
                    buyerName={this.state.buyerName}
                    buyerCPF={this.state.buyerCPF}
                    buyerEmail={this.state.buyerEmail}
                    listBuyer={this.state.listBuyer}
                    listClient={this.state.listClient}
                    amount={this.state.amount}
                    paymentType={this.state.paymentType}
                    cardHolderName={this.state.cardHolderName}
                    cardNumber={this.state.cardNumber}
                    cardExpirationDate={this.state.cardExpirationDate}
                    cardCVV={this.state.cardCVV}
                    handleChange={this.handleChange} 
                    handleChangeSelectBuyer={this.handleChangeSelectBuyer} 
                    handleChangeSelectClient={this.handleChangeSelectClient} 
                    handleAddUpdate={this.handleAddUpdate}
                    handleAddBuyer={this.handleAddBuyer}
                    handleAddClient={this.handleAddClient}
                    cleanFields={this.cleanFields}
                    
            
                />
                <PaymentList listPayment={this.state.listPayment} />
            </div>
        )
    }
}