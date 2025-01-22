///<reference types='cypress' />
import postD from "../../fixtures/1.Api/gorPostData"
import putD from "../../fixtures/1.Api/gorPutData"

describe('TS001 : verify reqres Api for gorest', function () {
    postD.forEach((el, index) => {
        it('TC001 - verify reqres Api-post Get put delete method', function () {
            const token = '2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'
            cy.request({
                url: 'https://gorest.co.in/public/v2/users',
                method: 'POST',
                body: el,
                // {
                //     "name": "Neel Chawde",
                //     "gender": "male",
                //     "email": "neel133@gmail.com",
                //     "status": "active"
                // },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((respost) => {
                //cy.log(respost.body.id)
                expect(respost.body.name).to.eq(el.name)
                return respost.body.id
            }).then((userId)=>{
                cy.request({
                    url : `https://gorest.co.in/public/v2/users/${userId}`,
                    method : 'PUT',
                    body : putD[index]
                })
            })
        })
    })
})