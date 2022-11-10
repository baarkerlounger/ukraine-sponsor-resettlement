require('cypress-xpath');
const elements = require('../../page_elements/EOI/eoi_elements')
const bodytext = require('../../../fixtures/bodytext.json')
const secrets = require('../../../fixtures/bodytext_secrets.json')
import { faker } from '@faker-js/faker';
const randomName = faker.name.fullName()
const randonBuildingNo = faker.address.buildingNumber()
const randomStreetadd = faker.address.streetAddress()
const randomCityName = faker.address.cityName()
const randomPhoneno = faker.phone.phoneNumber('+00 00 00# ## ##')


export const eoi_eligibility_check = () => {
    cy.visit('/')
    //cy.visit('http://localhost:8080')
    cy.get(elements.coockies_accept).click().wait(1000)
    cy.get(elements.hide_coockie_msg).click().wait(1000)
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(1000)
    cy.get(elements.start_button).click().wait(500)
    cy.get(elements.page_heading).contains('Check if your property is suitable for hosting').should('be.visible')
    cy.get(elements.yes_radiobtn).click().wait(200)
    cy.get(elements.sa_continue_button).click().wait(500)
    cy.get(elements.page_heading).contains('Important things to consider').should('be.visible')
    cy.get(elements.yes_radiobtn).click().wait(200)
    cy.get(elements.sa_continue_button).click().wait(500)
    cy.get(elements.page_heading).contains('Can you commit to hosting for at least 6 months?').should('be.visible')
    cy.get(elements.yes_radiobtn).click().wait(200)
    cy.get(elements.sa_continue_button).click().wait(500)
    cy.get(elements.page_heading).contains('Now we need your information').should('be.visible')
    cy.get(elements.sa_continue_button).click().wait(1000)
}

export const your_details_page = () => {
    cy.get(elements.fullname_label).contains('Enter your full name').should('be.visible').wait(500)
    cy.get(elements.fullname_textbox).clear().type(randomName).wait(200)
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.email_label).contains('Enter your email address').should('be.visible').wait(500)
    cy.get(elements.email_textbox).clear().type(secrets.email).wait(500)
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.phonenumber_label).contains('Enter your contact telephone number').should('be.visible').wait(500)
    cy.get(elements.phonenumber_textbox).clear().type(randomPhoneno).wait(200)
    cy.get(elements.continue_button).click().wait(1000)
}

export const your_property_address = () => {
    cy.get(elements.page_heading).contains('Enter your full residential address').should('be.visible').wait(500)
    cy.get(elements.addressl1_textbox).clear().type(randonBuildingNo).wait(200)
    cy.get(elements.addressl2_textbox).clear().type(randomStreetadd).wait(200)
    cy.get(elements.townorcity_textbox).clear().type(randomCityName).wait(200)
    cy.get(elements.postcode_textbox).clear().type('NW10 3WE').wait(200)
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.page_heading).contains('Is the property you’re offering at a different address to your home?').should('be.visible').wait(200)
    cy.get(elements.difadd_yes_radiobtn).click().wait(200)
    cy.get(elements.continue_button).click().wait(1000)
    cy.get(elements.page_heading).contains("Enter the address of the property you're offering").should('be.visible').wait(500)
    cy.get(elements.offering_addressl1_textbox).clear().type('Property One Address').wait(200)
    cy.get(elements.offering_addressl2_textbox).clear().type(randomStreetadd).wait(200)
    cy.get(elements.offering_townorcity_textbox).clear().type(randomCityName).wait(200)
    cy.get(elements.offering_postcode_textbox).clear().type('KT20 3KE').wait(200)
    cy.get(elements.continue_button).click().wait(1000)
}

export const more_properties = () => {
    cy.get(elements.page_heading).contains('Are you offering any more properties?').should('be.visible').wait(200)
    cy.get(elements.more_properties_yes_radiobtn).click().wait(200)
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.anymore_properties_label).contains(bodytext.more_properties_to_offer).should('be.visible')
    cy.get(elements.continue_button).click().wait(500)
}

export const hosting_details = () => {
    cy.get(elements.start_hosting_heading).contains('How soon can you start hosting someone?').should('be.visible').wait(500)
    cy.get(elements.asap_radiobtn).click()
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.page_heading).contains('How many people normally live in the property you’re offering (not including guests)?').should('be.visible')
    cy.get(elements.adults_textbox).clear().type('6')
    cy.get(elements.children_textbox).clear().type('4')
    cy.get(elements.continue_button).click().wait(1000)
}

export const accommodation_details = () => {
    cy.get(elements.page_heading).contains('Who would you like to offer accommodation to? ').should('be.visible').wait(500)
    cy.get(elements.morethanone_radiobtn).click()
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.page_heading).contains('How many bedrooms are available for guests in the property you’re registering now?').should('be.visible').wait(500)
    cy.get(elements.sbedroom_textbox).clear().type('4')
    cy.get(elements.dbbedroom_textbox).clear().type('2').wait(500)
    cy.get(elements.continue_button).click().wait(1000)
}

export const stepfree_access_details = () => {
    cy.get(elements.page_heading).contains('Does the property, or any of the properties, have step-free access?').should('be.visible').wait(500)
    cy.get(elements.stepfacc_yta_radiobtn).click().wait(500)
    cy.get(elements.continue_button).click().wait(1000)
}

export const pets_details = () => {
    cy.get(elements.pets_heading).contains('Would you consider allowing guests to bring their pets?').should('be.visible').wait(500)
    cy.get(elements.pets_yes_radiobtn).click().wait(500)
    cy.get(elements.continue_button).click().wait(1000)
}

export const take_part_in_research = () => {
    cy.get(elements.research_heading).contains('Would you like to take part in research to help us improve the Homes for Ukraine service?').should('be.visible').wait(500)
    cy.get(elements.research_yes_radiobtn).click().wait(200)
    cy.get(elements.continue_button).click().wait(1000)
}

export const consent = () => {
    cy.get(elements.consent_heading).contains('Confirm you have read the privacy statement and agree that the information you have provided in this form can be used for the Homes for Ukraine scheme').should('be.visible').wait(500)
    cy.get(elements.consent_checkbox).click().wait(200)
    cy.get(elements.continue_button).click().wait(1000)
}

export const check_your_answers = () => {
    cy.get(elements.page_heading).contains('Check your answers before sending your registration').should('be.visible').wait(200)
    cy.get(elements.cya_name).contains(randomName).should('be.visible').wait(500)
    cy.get(elements.cya_email).contains(secrets.email).should('be.visible')
    cy.get(elements.cya_phone).contains(randomPhoneno).should('be.visible').wait(1000)
    cy.get(elements.cya_res_address).should("contain.text", 'NW10 3WE')
    cy.get(elements.cya_dif_address).should("contain.text", 'Yes')
    cy.get(elements.cya_p1_address).should("contain.text", 'Property One Address')
    cy.get(elements.cya_more_properties).should("contain.text", 'Yes')
    cy.get(elements.cya_adults).should("contain.text", '6')
    cy.get(elements.cya_children).should("contain.text", '4')
    cy.get(elements.cya_start_date).should("contain.text", 'As soon as possible')
    cy.get(elements.cya_accommodate).should("contain.text", 'More than one adult')
    cy.get(elements.cya_sbedrooms).should("contain.text", '4')
    cy.get(elements.cya_dbedrooms).should("contain.text", '2')
    cy.get(elements.cya_sf_access).should("contain.text", "Yes, all")
    cy.get(elements.cya_pets).should("contain.text", 'Yes')
    cy.get(elements.cya_research).should("contain.text", 'Yes')
    cy.get(elements.cya_pstatement).should("contain.text", 'Agreed')
}

export const accept_send = () => {
    cy.get(elements.continue_button).click().wait(500)
    cy.get(elements.registration_complete_heading).contains('Thank you for registering').should('be.visible').wait(200)
    cy.get(elements.ref_number).contains('EOI').should('be.visible').wait(1000)
}