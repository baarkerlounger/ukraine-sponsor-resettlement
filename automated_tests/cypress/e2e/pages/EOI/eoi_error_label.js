require('cypress-xpath')
const elements = require('../../page_elements/EOI/eoi_elements')
const error = require('../../../fixtures/eoi_bodytext_error.json')
const bodytext = require('../../../fixtures/eoi_bodytext.json')
const secrets = require('../../../fixtures/eoi_bodytext_secrets.json')

export const eoi_eligibility_check_ev_start = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.cookies_accept).click().wait(Cypress.env('waitTime'))
    cy.get(elements.hide_cookie_msg).click().wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible')
    cy.get(elements.start_button).click()
}
export const eoi_eligibility_check_ev_property_suitability = () => {
    cy.get(elements.page_heading).contains('Check if your property is suitable for hosting').should('be.visible')
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.error_validation_radio_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.yes_radiobtn).click()
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
}
export const eoi_eligibility_check_ev_things_to_consider = () => {
    cy.get(elements.page_heading).contains('Important things to consider').should('be.visible')
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.error_validation_radio_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.yes_radiobtn).click()
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
}
export const eoi_eligibility_check_ev_6months = () => {
    cy.get(elements.page_heading).contains('Can you commit to hosting for at least 6 months?').should('be.visible')
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.error_validation_radio_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.yes_radiobtn).click()
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains('Now we need your information').should('be.visible')
    cy.get(elements.sa_continue_button).click().wait(Cypress.env('waitTime'))
}
export const your_details_page_ev_s1_3 = () => {
    cy.get(elements.fullname_label).contains('Enter your full name').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.fullname_textbox).clear()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.fullname_error_label).contains(error.fullname_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.fullname_error_sbox_msg).contains(error.fullname_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.fullname_error_textbox).clear().type(secrets.user_name)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.email_label).contains('Enter your email address').should('be.visible')
    cy.get(elements.email_textbox).clear()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.email_error_label).contains(error.email_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.email_error_sbox_msg).contains(error.email_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.email_error_textbox).clear().type(secrets.email)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.phonenumber_label).contains('Enter your contact telephone number').should('be.visible')
    cy.get(elements.phonenumber_textbox).clear()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.phonenumber_error_label).contains(error.phone_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.pnonenumber_error_sbox_msg).contains(error.phone_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.phonenumber_error_textbox).clear().type(secrets.phoneno)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const residential_address_validation_ev_s4 = () => {
    cy.get(elements.page_heading).contains('Enter your full residential address').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.addressl1_textbox).clear()
    cy.get(elements.addressl2_textbox).clear()
    cy.get(elements.townorcity_textbox).clear()
    cy.get(elements.postcode_textbox).clear()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.addressl1_error_label).contains(error.addl1_err_msg).should('be.visible')
    cy.get(elements.townorcity_error_label).contains(error.townorcity_err_msg).should('be.visible')
    cy.get(elements.postcode_error_label).contains(error.postcode_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.addressl1_error_sbox_msg).contains(error.addl1_err_msg).should('be.visible')
    cy.xpath(elements.townorcity_error_sbox_msg).contains(error.townorcity_err_msg).should('be.visible')
    cy.xpath(elements.postcode_error_sbox_msg).contains(error.postcode_err_msg).should('be.visible')
    //res address line one 
    cy.get(elements.addressl1_error_textbox).clear().type(secrets.building_no)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.addressl1_error_label).should('not.exist')
    cy.get(elements.townorcity_error_label).contains(error.townorcity_err_msg).should('be.visible')
    cy.get(elements.postcode_error_label).contains(error.postcode_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.addressl1_error_sbox_msg).should('not.exist')
    cy.xpath(elements.townorcity_error_sbox_msg).contains(error.townorcity_err_msg).should('be.visible')
    cy.xpath(elements.postcode_error_sbox_msg).contains(error.postcode_err_msg).should('be.visible')
    //res address line one and city
    cy.get(elements.townorcity_error_textbox).clear().type(secrets.city)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.addressl1_error_label).should('not.exist')
    cy.get(elements.townorcity_error_label).should('not.exist')
    cy.get(elements.postcode_error_label).contains(error.postcode_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.addressl1_error_sbox_msg).should('not.exist')
    cy.xpath(elements.townorcity_error_sbox_msg).should('not.exist')
    cy.xpath(elements.postcode_error_sbox_msg).contains(error.postcode_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    //res address line one, city and postcode
    cy.get(elements.postcode_error_textbox).clear().type("NW10 3WE")
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.addressl1_error_label).should('not.exist')
    cy.get(elements.townorcity_error_label).should('not.exist')
    cy.get(elements.postcode_error_label).should('not.exist').wait(Cypress.env('waitTime'))
    cy.get(elements.error_summary_title).should('not.exist')
    cy.xpath(elements.addressl1_error_sbox_msg).should('not.exist')
    cy.xpath(elements.townorcity_error_sbox_msg).should('not.exist')
    cy.xpath(elements.postcode_error_sbox_msg).should('not.exist').wait(Cypress.env('waitTime'))
}
export const hosting_details_ev_s5 = () => {
    cy.get(elements.difaddress_heading).contains('Is the property you’re offering at a different address to your home?').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.difaddress_error_label).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.difadd_yes_error_radiobtn).click().wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const offering_property_address_validation_ev_s6 = () => {
    cy.get(elements.page_heading).contains("Enter the address of the property you're offering").should('be.visible').wait(250)
    cy.get(elements.offering_addressl1_textbox).clear()
    cy.get(elements.offering_addressl2_textbox).clear()
    cy.get(elements.offering_townorcity_textbox).clear()
    cy.get(elements.offering_postcode_textbox).clear()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    //null values
    cy.get(elements.offering_addressl1_error_label).contains(error.addl1_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.offering_townorcity_error_label).contains(error.townorcity_err_msg).should('be.visible')
    cy.get(elements.offering_postcode_error_label).contains(error.postcode_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.offering_addressl1_error_sbox_msg).contains(error.addl1_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.offering_townorcity_error_sbox_msg).contains(error.townorcity_err_msg).should('be.visible')
    cy.xpath(elements.offering_postcode_error_sbox_msg).contains(error.postcode_err_msg).should('be.visible').wait(250)
    //off address line one 
    cy.get(elements.offering_addressl1_error_textbox).clear().type('Property One Address')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.offering_addressl1_error_label).should('not.exist')
    cy.get(elements.offering_townorcity_error_label).contains(error.townorcity_err_msg).should('be.visible')
    cy.get(elements.offering_postcode_error_label).contains(error.postcode_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.offering_addressl1_error_sbox_msg).should('not.exist')
    cy.xpath(elements.offering_townorcity_error_sbox_msg).contains(error.townorcity_err_msg).should('be.visible')
    cy.xpath(elements.offering_postcode_error_sbox_msg).contains(error.postcode_err_msg).should('be.visible').wait(250)
    //off address line one and city
    cy.get(elements.offering_townorcity_error_textbox).clear().type('Gillingham')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.offering_addressl1_error_label).should('not.exist')
    cy.get(elements.offering_townorcity_error_label).should('not.exist')
    cy.get(elements.offering_postcode_error_label).contains(error.postcode_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.offering_addressl1_error_sbox_msg).should('not.exist')
    cy.xpath(elements.offering_townorcity_error_sbox_msg).should('not.exist')
    cy.xpath(elements.offering_postcode_error_sbox_msg).contains(error.postcode_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    //off address line one, city and postcode
    cy.get(elements.offering_postcode_error_textbox).clear().type("KE10 3BB")
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.offering_addressl1_error_label).should('not.exist')
    cy.get(elements.offering_townorcity_error_label).should('not.exist')
    cy.get(elements.offering_postcode_error_label).should('not.exist')
    cy.get(elements.error_summary_title).should('not.exist').wait(Cypress.env('waitTime'))
    cy.xpath(elements.offering_addressl1_error_sbox_msg).should('not.exist')
    cy.xpath(elements.offering_townorcity_error_sbox_msg).should('not.exist')
    cy.xpath(elements.offering_postcode_error_sbox_msg).should('not.exist').wait(Cypress.env('waitTime'))
}
export const more_properties_ev_s7_8 = () => {
    cy.get(elements.page_heading).contains('Are you offering any more properties?').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.more_properties_error_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.more_properties_yes_error_radiobtn).click().wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.anymore_properties_label).contains(bodytext.more_properties_to_offer).should('be.visible')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const how_soon_ev_s9 = () => {
    cy.get(elements.start_hosting_heading).contains('How soon can you start hosting someone?').should('be.visible')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.sdate_radiobtn_error_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.specific_date_radiobtn_error).click().wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.sdate_error_label).contains(error.start_date_err_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.sdate_error_sbox_msg).contains(error.start_date_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.day_textbox_error).clear().type('31')
    cy.get(elements.month_textbox).clear().type('12')
    cy.get(elements.year_textbox).clear().type('2030')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
//changes will be done here
export const no_of_ppl_ev_s10 = () => {
    cy.get(elements.page_heading).contains('How many people normally live in the property you’re offering (not including guests)?').should('be.visible')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.adults_error).should('exist')
    cy.get(elements.children_error).should('exist')
    cy.get(elements.adults_textbox_error).clear().type(6)
    cy.get(elements.children_textbox_error).clear().type(4)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.children_error).should('not.exist')
    cy.get(elements.adults_error).should('not.exist').wait(Cypress.env('waitTime'))
}
export const accommodation_details_ev_s11 = () => {
    cy.get(elements.page_heading).contains('Who would you like to offer accommodation to? ').should('be.visible')
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.accommodation_error_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.nopref_radiobtn).click().wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const no_of_bedrooms_ev_s12 = () => {
    cy.get(elements.page_heading).contains('How many bedrooms are available for guests in the property you’re registering now?').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.hinttext).contains(bodytext.bedrooms_hint).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.sbedroom_error_label).should("contain.text", "You must enter a number from 0 to 9")
    cy.get(elements.dbbedroom_error_label).should("contain.text", "You must enter a number from 0 to 9")
    cy.get(elements.sbedroom_error_sbox_msg).should("contain.text", "You must enter a number from 0 to 9")
    cy.get(elements.dbbedroom_error_sbox_msg).should("contain.text", "You must enter a number from 0 to 9")
    cy.get(elements.sbedroom_textbox_error).clear().type(4)
    cy.get(elements.dbbedroom_textbox_error).clear().type(2)
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.sbedroom_error_label).should('not.exist')
    cy.get(elements.dbbedroom_error_label).should('not.exist')
    cy.get(elements.sbedroom_error_sbox_msg).should('not.exist')
    cy.get(elements.dbbedroom_error_sbox_msg).should('not.exist').wait(Cypress.env('waitTime'))
}
export const stepfree_access_details_ev_s13 = () => {
    cy.get(elements.page_heading).contains('Does the property, or any of the properties, have step-free access?').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.stepfree_error_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.error_sbox_sel_option_msg).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.hinttext).contains(bodytext.Stepfree_access_hint).should('be.visible')
    cy.get(elements.stepfree_idk_radiobtn_error).click()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const pets_details_ev_s14 = () => {
    cy.get(elements.pets_heading).contains('Would you consider allowing guests to bring their pets?').should('be.visible')
    cy.get(elements.continue_button).click()
    cy.get(elements.pets_error_label).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.pets_error_sbox_msg).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.pets_no_radiobtn_error).click()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const take_part_in_research_ev_s15 = () => {
    cy.get(elements.research_heading).contains('Would you like to take part in research to help us improve the Homes for Ukraine service?').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.research_error_label).contains(error.radiobtn_error_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.research_error_sbox_msg).contains(error.radiobtn_error_msg).should('be.visible')
    cy.get(elements.research_no_radiobtn_error).click()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const consent_ev_s16 = () => {
    cy.get(elements.consent_heading).contains('Confirm you have read the privacy statement and agree that the information you have provided in this form can be used for the Homes for Ukraine scheme').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
    cy.get(elements.consent_error_label).contains(error.consent_err_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.error_summary_title).contains(error.err_summary_title_msg).should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.consent_error_sbox_msg).contains(error.consent_err_msg).should('be.visible')
    cy.get(elements.consent_checkbox_error).click()
    cy.get(elements.continue_button).click().wait(Cypress.env('waitTime'))
}
export const check_your_answers = () => {
    cy.get(elements.page_heading).contains('Check your answers before sending your registration').should('be.visible')
    cy.get(elements.cya_name).contains(secrets.user_name).should('be.visible')
    cy.get(elements.cya_email).contains(secrets.email).should('be.visible')
    cy.get(elements.cya_phone).contains(secrets.phoneno).should('be.visible')
    cy.get(elements.cya_res_address).should("contain.text", 'NW10 3WE')
    cy.get(elements.cya_dif_address).should("contain.text", 'Yes')
    cy.get(elements.cya_p1_address).should("contain.text", 'Property One Address')
    cy.get(elements.cya_more_properties).should("contain.text", 'Yes')
    cy.get(elements.cya_adults).should("contain.text", '6')
    cy.get(elements.cya_children).should("contain.text", '4')
    cy.get(elements.cya_start_date).should("contain.text", '31 December 2030')
    cy.get(elements.cya_accommodate).should("contain.text", 'No Preference')
    cy.get(elements.cya_sbedrooms).should("contain.text", '4')
    cy.get(elements.cya_dbedrooms).should("contain.text", '2')
    cy.get(elements.cya_sf_access).should("contain.text", "I don’t know")
    cy.get(elements.cya_pets).should("contain.text", 'No')
    cy.get(elements.cya_research).should("contain.text", 'No')
    cy.get(elements.cya_pstatement).should("contain.text", 'Agreed').wait(Cypress.env('waitTime'))
}