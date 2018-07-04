process.env.NODE_ENV = 'test';

const mongoose = require('mongoose')
const payment = require('../api/payments')

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../config/server')
const should = chai.should();

chai.use(chaiHttp)

describe('payments', () => {
    beforeEach((done) => {
        payment.remove({}, (err) => { 
           done()
        })
})

describe('/GET payment', () => {
    it('it should GET all the payments', (done) => {
        chai.request(server)
            .get('/payment')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0)
              done()
            })
        })
    })
})

  /*
  * Test the /POST route
  
  describe('/POST payment', () => {
        it('it should not POST a payment without payment Type', (done) => {
            const payment = {
                buyer: 45,
                client: 45,
                amount: 45,
                boletoNumber: 1
            }
            chai.request(server)
                .post('/payment')
                .send(payment)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('errors')
                    res.body.errors.should.have.property('paymentType')
                    res.body.errors.pages.should.have.property('kind').eql('required')
                done()
            })
      })

      it('it should POST a payment ', (done) => {
        let payment = {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            year: 1954,
            pages: 1170
        }
        chai.request(server)
            .post('/payment')
            .send(payment)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('payment successfully added!');
                res.body.payment.should.have.property('title');
                res.body.payment.should.have.property('author');
                res.body.payment.should.have.property('pages');
                res.body.payment.should.have.property('year');
              done();
            });
      });
  });
  
});*/