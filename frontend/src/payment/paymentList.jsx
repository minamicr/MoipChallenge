import React from 'react'

export default props => {
    const renderRows = () => {
        
        const list = props.listPayment || []
        return list.map(payment => (
            <tr key={payment._id}>
                <td className='pr-3'>{payment.buyerName}</td>
                <td className='pr-3'>{payment.amount}</td>
                <td className='pr-3'>{payment.paymentType}</td>
                <td className='pr-3'>{payment.boletoNumber}</td>
                <td className='pr-3'>{payment.cardHolderName}</td>
                <td className='pr-3'>{payment.cardNumber}</td>
                <td className='pr-3'>{payment.cardExpirationDate}</td>
                <td className='pr-3'>{payment.cardCVV}</td>
            </tr>
        ))
    }

    return (
        <table className="table-striped">
            <thead>
                <tr>
                    <th className='pr-3'>Comprador</th>
                    <th className='pr-3'>Valor</th>
                    <th className='pr-3'>Tipo de Pagamento</th>
                    <th className='pr-3'>Número do Boleto</th>
                    <th className='pr-3'>Nome Cartão de Crédito</th>
                    <th className='pr-3'>Número Cartão</th>
                    <th className='pr-3'>Data de Validade</th>
                    <th className='pr-3'>CVV</th>

                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}