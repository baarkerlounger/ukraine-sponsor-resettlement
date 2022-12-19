require('cypress-xpath')
const elements = require('../../page_elements/EOI/eoi_elements')

//header
export const links_validation_govuk = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.cookies_accept).click().wait(Cypress.env('waitTime'))
    cy.get(elements.hide_cookie_msg).click().wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.govuk_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/').should('exist')
    cy.get(elements.govuk_header).contains("Welcome to GOV.UK").should('exist').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_hfu = () => {
    cy.visit('/expression-of-interest/self-assessment/challenges').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains("Important things to consider").should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.huf_header_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', Cypress.config('baseUrl')).should('exist')
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}
//footer
export const links_validation_govlicence = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.gov_licence_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/').should('exist')
    cy.get(elements.gov_licence_logo).should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_crown_copyright = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.crown_copyright_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/')
    cy.get(elements.crown_copyright_header).contains("Crown copyright").wait(Cypress.env('waitTime'))
    cy.go('back')
}
//self assesment
export const links_validation_sa_p1_scotland = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.scotland_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.mygov.scot/homes-for-ukraine-scotland-super-sponsor-scheme')
    cy.get(elements.page_heading_scotland).contains("How the Homes for Ukraine Super Sponsor Scheme works").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_p1_wales = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.wales_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.wales/offer-home-wales-refugees-ukraine')
    cy.get(elements.page_heading_wales).contains("Offer a home in Wales to refugees from Ukraine").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_p1_guidance = () => {
    cy.visit('/').wait(Cypress.env('waitTime'))
    cy.get(elements.main_heading).contains("Homes for Ukraine: Register to host people already living in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.guidance_for_sponsors_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/guidance/homes-for-ukraine-sponsor-guidance')
    cy.get(elements.main_heading).contains("Homes for Ukraine: sponsor guidance").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_other_ways_l1 = () => {
    cy.visit('/expression-of-interest/self-assessment/other-ways-to-help').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains("There are other ways you can help").should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.local_council_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/find-local-council')
    cy.get(elements.main_heading_xl).contains("Find your local council").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_other_ways_l2 = () => {
    cy.visit('/expression-of-interest/self-assessment/other-ways-to-help').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains("There are other ways you can help").should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.stand_with_ukraine_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/government/news/ukraine-what-you-can-do-to-help')
    cy.get(elements.main_heading).contains("Ukraine: what you can do to help").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_other_ways_l3 = () => {
    cy.visit('/expression-of-interest/self-assessment/other-ways-to-help').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains("There are other ways you can help").should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.community_sponsorship_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/government/publications/apply-for-full-community-sponsorship')
    cy.get(elements.main_heading).contains("Apply for community sponsorship").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_other_ways_l4 = () => {
    cy.visit('/expression-of-interest/self-assessment/other-ways-to-help').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains("There are other ways you can help").should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.volunteering_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/government/get-involved/take-part/volunteer')
    cy.get(elements.main_heading_xl).contains("Volunteer").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_sa_other_ways_l5 = () => {
    cy.visit('/expression-of-interest/self-assessment/other-ways-to-help').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains("There are other ways you can help").should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.support_organisations_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/guidance/recognised-providers-organisations-who-can-help-guests-from-ukraine-find-sponsors-in-the-uk')
    cy.get(elements.main_heading).contains("Recognised Providers: Organisations who can help guests from Ukraine find sponsors in the UK").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_postcode_check_page_l1 = () => {
    cy.visit('/expression-of-interest/steps/end').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains('You have entered an address that is not in England or Northern Ireland').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.scotland_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.mygov.scot/homes-for-ukraine-scotland-super-sponsor-scheme')
    cy.get(elements.page_heading_scotland).contains("How the Homes for Ukraine Super Sponsor Scheme works").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_postcode_check_page_l2 = () => {
    cy.visit('/expression-of-interest/steps/end').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains('You have entered an address that is not in England or Northern Ireland').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.wales_link).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.wales/offer-home-wales-refugees-ukraine')
    cy.get(elements.page_heading_wales).contains("Offer a home in Wales to refugees from Ukraine").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_postcode_check_page_l3 = () => {
    cy.visit('/expression-of-interest/steps/end').wait(Cypress.env('waitTime'))
    cy.get(elements.page_heading).contains('You have entered an address that is not in England or Northern Ireland').should('be.visible').wait(Cypress.env('waitTime'))
    cy.xpath(elements.local_council_link_samepage).click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/find-local-council')
    cy.get(elements.main_heading_xl).contains("Find your local council").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

export const links_validation_step_16 = () => {
    cy.visit('/expression-of-interest/steps/16').wait(Cypress.env('waitTime'))
    cy.get(elements.consent_heading).contains('Confirm you have read the privacy statement and agree that the information you have provided in this form can be used for the Homes for Ukraine scheme').should('be.visible').wait(Cypress.env('waitTime'))
    cy.get(elements.privacy_statement_link).invoke('removeAttr', 'target').click().wait(Cypress.env('waitTime'))
    cy.url().should('include', 'https://www.gov.uk/guidance/homes-for-ukraine-visa-sponsorship-scheme-privacy-notice')
    cy.get(elements.main_heading).contains("Homes for Ukraine visa sponsorship scheme: privacy notice").should('be.visible').wait(Cypress.env('waitTime'))
    cy.go('back')
}

