var page_elements = {
    //common
    show_true: '.govuk-accordion__show-all[aria-expanded="true"]',
    show_false: '.govuk-accordion__show-all[aria-expanded="false"]',
    spchild_link: "body > div:nth-child(6) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > a:nth-child(5)",
    main_heading: ".gem-c-title__text.govuk-heading-l",
    page_heading: ".govuk-heading-l",
    page_heading_xl: ".gem-c-title__text.govuk-heading-xl",
    startnow_button: 'a[role="button"]',
    page_body: '.govuk-body',
    continue_button_ec: 'a[role="button"]',
    continue_button: 'button[type="submit"]',
    continue_button_other: "a[class='govuk-button']",
    insettext: '.govuk-inset-text',
    summary_text: ".govuk-details__summary-text",
    err_summary_title: '.govuk-error-summary__title',
    err_sbox_msg: "a[data-turbo='false']",
    details_text: '.govuk-details__text',
    save_return: "//a[normalize-space()='Save and return later']",
    go_back_pre_page:"//a[normalize-space()='Go back to the previous page']",
    email_sent_cf: "//main[@id='main-content']//p[1]",
    add_btn: ".govuk-button.govuk-button--secondary",
    //main page
    mainp_gui_link: "//a[normalize-space()='guidance for sponsoring a child fleeing Ukraine']",
    spon_consent_link: "//a[normalize-space()='UK sponsorship arrangement consent form']",
    how_to_comp_consent_link: "//a[normalize-space()='Find out how to complete the consent forms.']",
    apply_visa: "//a[contains(text(),'Read the guidance for children applying for a visa')]",
    page_heading_cont: ".govuk-caption-xl.gem-c-title__context",
    gov_lic_link:"//a[normalize-space()='Open Government Licence v3.0']",
    open_lic_logo: "#open-licence-logo",
    crown_cr: ".govuk-footer__link.govuk-footer__copyright-logo",
    crown_cr_header: "div[class='entry-header'] h1",
    //other
    cont_link: "//a[normalize-space()='Continue a saved application']",
    start_new_app: "//a[normalize-space()='Start a new application']",
    spon_fam_link: "//a[normalize-space()='Sponsor a family member from Ukraine']",
    spon_alknow_link: "//a[normalize-space()='Sponsor someone you already know from Ukraine']",
    register_link: "//a[normalize-space()='Register your interest with Homes for Ukraine']",
    //step1
    step1_radio_btn_yes: '#unaccompanied-minor-is-under-18-yes-field',
    step1_radio_btn_no: '#unaccompanied-minor-is-under-18-no-field',
    step1_err_radion_btn_no: '#unaccompanied-minor-is-under-18-no-field',
    step1_err_radio_btn_yes: '#unaccompanied-minor-is-under-18-field-error',
    step1_err_msg: '#unaccompanied-minor-is-under-18-error',
    //step2
    step2_err_radio_btn_yes: '#unaccompanied-minor-is-living-december-field-error',
    step2_radio_btn_yes: '#unaccompanied-minor-is-living-december-yes-field',
    step2_radio_btn_no: '#unaccompanied-minor-is-living-december-no-field',
    step2_bodytext: '#unaccompanied-minor-is-living-december-hint',
    step2_err_msg: '#unaccompanied-minor-is-living-december-error',
    step2_err_radio_btn_no: '#unaccompanied-minor-is-living-december-no-field',
    //step3
    step3_radio_btn_yes: '#unaccompanied-minor-is-born-after-december-yes-field',
    step3_radio_btn_no: '#unaccompanied-minor-is-born-after-december-no-field',
    step3_err_msg: '#unaccompanied-minor-is-born-after-december-error',
    step3_err_radio_btn_yes: '#unaccompanied-minor-is-born-after-december-field-error',
    //step4
    step4_radio_btn_no: '#unaccompanied-minor-is-unaccompanied-no-field',
    step4_radio_btn_yes: '#unaccompanied-minor-is-unaccompanied-yes-field',
    step4_err_radio_btn_yes: '#unaccompanied-minor-is-unaccompanied-field-error',
    step4_bodytext: '#unaccompanied-minor-is-unaccompanied-hint',
    step4_err_msg: '#unaccompanied-minor-is-unaccompanied-error',
    //step5
    step5_radio_btn_no: '#unaccompanied-minor-is-consent-no-field',
    step5_consent_radio_btn_yes: '#unaccompanied-minor-is-consent-yes-field',
    step5_bodytext: '#unaccompanied-minor-is-consent-hint',
    step5_guidance_link: '//a[contains(text(),"Read guidance about which consent forms are requir")]',
    step5_err_msg: '#unaccompanied-minor-is-consent-error',
    step5_err_radio_btn_yes: '#unaccompanied-minor-is-consent-field-error',
    step5_guidance_link: "//a[contains(text(),'Read guidance about which consent forms are requir')]",
    //step6
    step6_radio_btn_no: '#unaccompanied-minor-is-committed-no-field',
    step6_minimum_period_radio_btn_yes: '#unaccompanied-minor-is-committed-yes-field',
    step6_err_msg: '#unaccompanied-minor-is-committed-error',
    step6_err_radio_btn_yes: '#unaccompanied-minor-is-committed-field-error',
    //step7
    step7_radio_btn_no: '#unaccompanied-minor-is-permitted-no-field',
    step7_minimum_period_radio_btn_yes: '#unaccompanied-minor-is-permitted-yes-field',
    step7_err_msg: '#unaccompanied-minor-is-permitted-error',
    step7_err_radio_btn_yes: '#unaccompanied-minor-is-permitted-field-error',
    //step9
    step9_body_text: '.govuk-body',
    step9_start_application_btn: 'a[role="button"]',
    //tasklist
    tasklist_page_body: 'div[class="govuk-grid-column-two-thirds"] p strong',
    application_incomplete: 'div[class="govuk-grid-column-two-thirds"] p strong',
    your_details_heading: 'li:nth-child(1) h2:nth-child(1)',
    childs_accormadation_heading: "(//h2[@class='app-task-list__section'])[2]",
    childs_details_heading: "(//h2[@class='app-task-list__section'])[3]",
    send_your_application_heading: "(//h2[@class='app-task-list__section'])[4]",
    //step10
    name: 'a[href="/sponsor-a-child/steps/10"]',
    save_and_return_label: '.govuk-link',
    given_names_label: 'label[for="unaccompanied-minor-given-name-field"]',
    family_name_label: 'label[for="unaccompanied-minor-family-name-field"]',
    step10_gn_textbox: '#unaccompanied-minor-given-name-field',
    step10_fn_textbox: '#unaccompanied-minor-family-name-field',
    step10_gn_sbox_err_msg: "//a[normalize-space()='You must enter a valid given name']",
    step10_fn_sbox_err_msg: "//a[normalize-space()='You must enter a valid family name']",
    step10_gn_err_msg: '#unaccompanied-minor-given-name-error',
    step10_fn_err_msg: '#unaccompanied-minor-family-name-error',
    step10_gn_err_textbox: '#unaccompanied-minor-given-name-field-error',
    step10_fn_err_textbox: '#unaccompanied-minor-family-name-field-error',
    //step11
    known_by_another_name_hinttext: '#unaccompanied-minor-has-other-names-hint',
    select_no: '#unaccompanied-minor-has-other-names-field',
    select_yes: '#unaccompanied-minor-has-other-names-true-field',
    step11_err_yes: '#unaccompanied-minor-has-other-names-field-error',
    step11_err_msg: '#unaccompanied-minor-has-other-names-error',
    //step12
    other_given_names_label: "label[for='unaccompanied-minor-other-given-name-field']",
    other_family_name_label: "label[for='unaccompanied-minor-other-family-name-field']",
    step12_gn_textbox: '#unaccompanied-minor-other-given-name-field',
    step12_fn_textbox: '#unaccompanied-minor-other-family-name-field',
    step12_gn_sbox_err_msg: "//a[normalize-space()='You must enter a valid given name']",
    step12_fn_sbox_err_msg: "//a[normalize-space()='You must enter a valid family name']",
    step12_gn_err_msg: "#unaccompanied-minor-other-given-name-error",
    step12_fn_err_msg: "#unaccompanied-minor-other-family-name-error",
    step12_gn_err_textbox: '#unaccompanied-minor-other-given-name-field-error',
    step12_fn_err_textbox: '#unaccompanied-minor-other-family-name-field-error',
    //step13
    other_added_names_label: 'tr>td:nth-child(1)',
    name_completed: '//strong[normalize-space()="Completed"]',
    step_13_otr_name: 'body > div:nth-child(6) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)',
    remove_link: "(//a[normalize-space()='Remove'])[2]",
    //step14
    contact_details_link: 'a[href="/sponsor-a-child/steps/14"]',
    email_ad_body: '.govuk-body',
    email_ad_label: 'label[for="unaccompanied-minor-email-field"]',
    confirm_email_ad_label: 'label[for="unaccompanied-minor-email-confirm-field"]',
    step14_email_textbox: '#unaccompanied-minor-email-field',
    step14_email_cf_textbox: '#unaccompanied-minor-email-confirm-field',
    step14_email_err_msg: "#unaccompanied-minor-email-error",
    step14_email_err_cf_msg: "#unaccompanied-minor-email-confirm-error",
    step14_email_err_textbox: '#unaccompanied-minor-email-field-error',
    step14_email_err_cf_textbox: '#unaccompanied-minor-email-confirm-field-error',
    //step15
    mobile_number_body: '.govuk-body',
    mobile_number_label: 'label[for="unaccompanied-minor-phone-number-field"]',
    confirm_mobile_number_label: 'label[for="unaccompanied-minor-phone-number-confirm-field"]',
    step15_mob_textbox: '#unaccompanied-minor-phone-number-field',
    step15_mob_cf_textbox: '#unaccompanied-minor-phone-number-confirm-field',
    contact_details_completed: "strong[class='govuk-tag app-task-list__tag ']",
    step15_mob_err_msg: "#unaccompanied-minor-phone-number-error",
    step15_mob_err_cf_msg: "#unaccompanied-minor-phone-number-confirm-error",
    step15_mob_err_textbox: '#unaccompanied-minor-phone-number-field-error',
    step15_mob_err_cf_textbox: '#unaccompanied-minor-phone-number-confirm-field-error',
    //step16
    additional_details: 'a[href="/sponsor-a-child/steps/16"]',
    passport_label: 'label[for="unaccompanied-minor-identification-type-passport-field"]',
    ni_label: 'label[for="unaccompanied-minor-identification-type-national-identity-card-field"]',
    refugee_teavel_doc_label: 'label[for="unaccompanied-minor-identification-type-refugee-travel-document-field"]',
    dont_have_any_label: 'label[for="unaccompanied-minor-identification-type-none-field"]',
    step16_id_err_msg: "#unaccompanied-minor-identification-type-error",
    step16_idh_btn: "#unaccompanied-minor-identification-type-none-field",
    step16_pp_radio_btn: "#unaccompanied-minor-identification-type-passport-field",
    step16_pp_label: "label[for='unaccompanied-minor-passport-identification-number-field-error']",
    step16_pp_err_msg: "#unaccompanied-minor-passport-identification-number-error",
    step16_pp_err_textbox: "#unaccompanied-minor-passport-identification-number-field-error",
    step16_pp_textbox: '#unaccompanied-minor-passport-identification-number-field',
    //step17
    step17_id_reason_err_msg: "#unaccompanied-minor-no-identification-reason-error",
    step17_id_reason_err_textbox: '#unaccompanied-minor-no-identification-reason-field-error',
    //step18
    day_textbox: '#unaccompanied_minor_sponsor_date_of_birth_3i',
    month_textbox: '#unaccompanied_minor_sponsor_date_of_birth_2i',
    year_textbox: '#unaccompanied_minor_sponsor_date_of_birth_1i',
    step18_dob_err_msg: "#unaccompanied-minor-sponsor-date-of-birth-error",
    step18_day_err_textbox: "#unaccompanied-minor-sponsor-date-of-birth-field-error",
    step18_month_err_textbox: "#unaccompanied_minor_sponsor_date_of_birth_2i",
    step18_year_err_textbox: "#unaccompanied_minor_sponsor_date_of_birth_1i",
    //step19
    nationality_label: "label[for='unaccompanied-minor-nationality-field']",
    nationality_dropdown: '#unaccompanied-minor-nationality-field',
    step19_nationality_err_msg: "#unaccompanied-minor-nationality-error",
    step19_nationality_dropdown_err: "#unaccompanied-minor-nationality-field-error",
    //step20
    other_nationalities_hint: '#unaccompanied-minor-has-other-nationalities-hint',
    other_nationalities_yes_radio_button: '#unaccompanied-minor-has-other-nationalities-true-field',
    other_nationalities_no_radio_button: '#unaccompanied-minor-has-other-nationalities-field',
    step20_oth_nationality_err_yes: '#unaccompanied-minor-has-other-nationalities-field-error',
    step20_oth_nationality_err_msg: '#unaccompanied-minor-has-other-nationalities-error',
    //step21
    other_nationality_hint: "#unaccompanied-minor-other-nationality-hint",
    other_nationality_dropdown: '#unaccompanied-minor-other-nationality-field',
    step21_oth_nationality_err_msg: '#unaccompanied-minor-other-nationality-error',
    step21_oth_nationality_dropdown_err: "#unaccompanied-minor-other-nationality-field-error",
    //step22
    listed_other_nationalities: "td:nth-child(1)",
    step_22_otr_nationality_l2: "body > div:nth-child(6) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)",
    //verify task completed
    completed_1_of_4_label: "//p[normalize-space()='You have completed 1 of 4 sections.']",
    completed_name: "//body[1]/div[2]/main[1]/div[1]/div[1]/ol[1]/li[1]/ul[1]/li[2]/strong[1]",
    completed_details: "//body[1]/div[2]/main[1]/div[1]/div[1]/ol[1]/li[1]/ul[1]/li[2]/strong[1]",
    completed_ad_details: "//body[1]/div[2]/main[1]/div[1]/div[1]/ol[1]/li[1]/ul[1]/li[3]/strong[1]",
    //step23    
    address_link: 'a[href="/sponsor-a-child/steps/23"]',
    child_address_line1_label: 'label[for="unaccompanied-minor-residential-line-1-field"]',
    child_address_line2_label: 'label[for="unaccompanied-minor-residential-line-2-field"]',
    child_town_city_label: 'label[for="unaccompanied-minor-residential-town-field"]',
    child_postcode_label: 'label[for="unaccompanied-minor-residential-postcode-field"]',
    step23_addr_line1_textbox: '#unaccompanied-minor-residential-line-1-field',
    step23_addr_line2_textbox: '#unaccompanied-minor-residential-line-2-field',
    step23_city_textbox: '#unaccompanied-minor-residential-town-field',
    step23_pc_textbox: '#unaccompanied-minor-residential-postcode-field',
    step23_addr_sbox_err_msg: "//a[normalize-space()='You must enter an address']",
    step23_city_sbox_err_msg: "//a[normalize-space()='You must enter a town or city']",
    step23_pc_sbox_err_msg: "//a[normalize-space()='You must enter a valid UK postcode']",
    step23_addr_err_msg: "#unaccompanied-minor-residential-line-1-error",
    step23_city_err_msg: "#unaccompanied-minor-residential-town-error",
    step23_pc_err_msg: "#unaccompanied-minor-residential-postcode-error",
    step23_addr_line1_err_textbox: '#unaccompanied-minor-residential-line-1-field-error',
    step23_addr_line2_err_textbox: '#unaccompanied-minor-residential-line-2-field',
    step23_city_err_textbox: '#unaccompanied-minor-residential-town-field-error',
    step23_pc_err_textbox: '#unaccompanied-minor-residential-postcode-field-error',
    //step24
    child_address_validation_text: '.govuk-inset-text',
    sponsor_living_at_the_same_address_hint: '#unaccompanied-minor-different-address-hint',
    sponsor_living_at_the_same_address_no_button: '#unaccompanied-minor-different-address-no-field',
    step24_yes_btn: "#unaccompanied-minor-different-address-yes-field",
    step24_no_btn: "#unaccompanied-minor-different-address-no-field",
    step24_sa_err_msg: "#unaccompanied-minor-different-address-error",
    step24_sa_err_no_btn: "#unaccompanied-minor-different-address-no-field",
    //step25
    step25_yes_btn: "#unaccompanied-minor-other-adults-address-yes-field",
    //step26
    step26_addr_line1_label: 'label[for="unaccompanied-minor-sponsor-address-line-1-field"]',
    step26_addr_line2_label: 'label[for="unaccompanied-minor-sponsor-address-line-2-field"]',
    step26_city_label: 'label[for="unaccompanied-minor-sponsor-address-town-field"]',
    step26_pc_label: 'label[for="unaccompanied-minor-sponsor-address-postcode-field"]',
    step26_addr_line1_textbox: '#unaccompanied-minor-sponsor-address-line-1-field',
    step26_addr_line2_textbox: '#unaccompanied-minor-sponsor-address-line-2-field',
    step26_city_textbox: '#unaccompanied-minor-sponsor-address-town-field',
    step26_pc_textbox: '#unaccompanied-minor-sponsor-address-postcode-field',
    step26_addr_sbox_err_msg: "//a[normalize-space()='You must enter an address']",
    step26_city_sbox_err_msg: "//a[normalize-space()='You must enter a town or city']",
    step26_pc_sbox_err_msg: "//a[normalize-space()='You must enter a valid UK postcode']",
    step26_addr_err_msg: "#unaccompanied-minor-sponsor-address-line-1-error",
    step26_city_err_msg: "#unaccompanied-minor-sponsor-address-town-error",
    step26_pc_err_msg: "#unaccompanied-minor-sponsor-address-postcode-error",
    step26_addr_line1_err_textbox: '#unaccompanied-minor-sponsor-address-line-1-field-error',
    step26_addr_line2_err_textbox: '#unaccompanied-minor-sponsor-address-line-2-field',
    step26_city_err_textbox: '#unaccompanied-minor-sponsor-address-town-field-error',
    step26_pc_err_textbox: '#unaccompanied-minor-sponsor-address-postcode-field-error',
    //step27
    step27_gn_label: "label[for='unaccompanied-minor-adult-given-name-field']",
    step27_fn_label: "label[for='unaccompanied-minor-adult-family-name-field']",
    step27_fn_sbox_err_msg: "//a[normalize-space()='You must enter a valid family name']",
    step27_gn_sbox_err_msg: "//a[normalize-space()='You must enter a valid given name']",
    step27_fn_err_msg: "#unaccompanied-minor-adult-family-name-error",
    step27_gn_err_msg: "#unaccompanied-minor-adult-given-name-error",
    step27_gn_textbox: '#unaccompanied-minor-adult-given-name-field',
    step27_fn_textbox: '#unaccompanied-minor-adult-family-name-field',
    step27_gn_err_textbox: "#unaccompanied-minor-adult-given-name-field-error",
    step27_fn_err_textbox: "#unaccompanied-minor-adult-family-name-field-error",
    //step28
    residents_header: '.govuk-table__head',
    over16_persons_name: 'td:nth-child(1)',
    add_another_person_button: 'a[role="button"]',
    add_person_continue_button: 'a[class="govuk-button"]',
    //verify completed 2 of 5
    completed_2_of_5_label: ".govuk-grid-column-two-thirds > :nth-child(3)",
    completed_address: "//li[2]//ul[1]//li[1]//strong[1]",
    completed_live_there: ":nth-child(2) > .app-task-list__items > :nth-child(2) > .govuk-tag",
    //step29
    residents_details_link: "//a[normalize-space()='OVER SIXTEEN details']",
    residents_details_inserttext: '.govuk-inset-text',
    residents_details_hinttext: '#unaccompanied-minor-minor-date-of-birth-hint',
    step29_day_textbox: '#unaccompanied_minor_adult_date_of_birth_3i',
    residents_pp_radio_button: "#unaccompanied-minor-adult-identification-type-passport-field",
    residents_pp_number_label: "label[for='unaccompanied-minor-adult-passport-identification-number-field']",
    residents_rtdn_number_label: "label[for='unaccompanied-minor-adult-refugee-identification-number-field']",
    residents_rtdn_number_textbox: '#unaccompanied-minor-adult-refugee-identification-number-field',
    residents_ni_number_label: "label[for='unaccompanied-minor-adult-id-identification-number-field']",
    residents_ni_number_textbox: '#unaccompanied-minor-adult-id-identification-number-field',
    step29_dob_err_msg: "#unaccompanied-minor-adult-date-of-birth-error",
    step29_day_err_textbox: "#unaccompanied-minor-adult-date-of-birth-field-error",
    step29_month_err_textbox: "#unaccompanied_minor_adult_date_of_birth_2i",
    step29_year_err_textbox: "#unaccompanied_minor_adult_date_of_birth_1i",
    //verify completed 3 of 5
    completed_3_of_5_label: ".govuk-grid-column-two-thirds > :nth-child(3)",
    completed_residents_details: "strong[class='govuk-tag app-task-list__tag ']",
    not_started_data: 'body > div:nth-child(6) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(4) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(1) > strong:nth-child(2)',
    not_started_eligibility: 'body > div:nth-child(6) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(4) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(2) > strong:nth-child(2)',
    cannot_start_yet: "//strong[normalize-space()='Cannot start yet']",
    //step30
    step30_nat_dd: '#unaccompanied-minor-adult-nationality-field',
    step30_nat_err_msg: "#unaccompanied-minor-adult-nationality-error",
    step30_nat_err_dd: '#unaccompanied-minor-adult-nationality-field-error',
    step30_nat_label: "label[for='unaccompanied-minor-adult-nationality-field']",
    step30_nat_dd: '#unaccompanied-minor-adult-nationality-field',
    //step31
    step31_pp_textbox: "#unaccompanied-minor-adult-passport-identification-number-field",
    step31_id_err_msg: "#unaccompanied-minor-adult-identification-type-error",
    step31_pp_err_msg: "#unaccompanied-minor-adult-passport-identification-number-error",
    step31_pp_err_radio_btn: "#unaccompanied-minor-adult-identification-type-field-error",
    step31_pp_err_textbox: "#unaccompanied-minor-adult-passport-identification-number-field-error",
    step31_pp_label:"label[for='unaccompanied-minor-adult-passport-identification-number-field-error']",
    step31_ni_err_radio_btn: "#unaccompanied-minor-adult-identification-type-national-identity-card-field",
    step31_ni_err_textbox: "#unaccompanied-minor-adult-id-identification-number-field-error",
    step31_ni_err_msg: "#unaccompanied-minor-adult-id-identification-number-error",
    step31_ni_label:"label[for='unaccompanied-minor-adult-id-identification-number-field-error']",
    step31_refu_err_radio_btn: "#unaccompanied-minor-adult-identification-type-refugee-travel-document-field",
    step31_refu_err_textbox: "#unaccompanied-minor-adult-refugee-identification-number-field-error",
    step31_refu_err_msg: "#unaccompanied-minor-adult-refugee-identification-number-error",
    step31_refu_label:"label[for='unaccompanied-minor-adult-refugee-identification-number-field-error']",
    step31_idha_radio_btn:"#unaccompanied-minor-adult-identification-type-none-field",
    //step32
    childs_personal_details_link: "a[href='/sponsor-a-child/steps/32']",
    step32_gn_label: "label[for='unaccompanied-minor-minor-given-name-field']",
    step32_fn_label: "label[for='unaccompanied-minor-minor-family-name-field']",
    step32_gn_textbox: "#unaccompanied-minor-minor-given-name-field",
    step32_fn_textbox: "#unaccompanied-minor-minor-family-name-field",
    step32_fn_sbox_err_msg: "//a[normalize-space()='You must enter a valid family name']",
    step32_gn_sbox_err_msg: "//a[normalize-space()='You must enter a valid given name']",
    step32_fn_err_msg: "#unaccompanied-minor-minor-family-name-error",
    step32_gn_err_msg: "#unaccompanied-minor-minor-given-name-error",
    step32_gn_err_textbox: "#unaccompanied-minor-minor-given-name-field-error",
    step32_fn_err_textbox: "#unaccompanied-minor-minor-family-name-field-error",
    //step33
    childs_personal_details_insettext: '.govuk-inset-text',
    cpd_cbcontacted_label: "label[for='unaccompanied-minor-minor-contact-type-none-field']",
    step33_email_checkbox: '#unaccompanied-minor-minor-contact-type-email-field',
    step33_ctc_err_msg: '#unaccompanied-minor-minor-contact-type-error',
    step33_ctc_checkbox: '#unaccompanied-minor-minor-contact-type-none-field',
    step33_email_err_checkbox: '#unaccompanied-minor-minor-contact-type-field-error',
    step33_email_err_msg: '#unaccompanied-minor-minor-email-error', 
    step33_email_err_cf_msg: '#unaccompanied-minor-minor-email-confirm-error', 
    step33_email_textbox: "#unaccompanied-minor-minor-email-field",
    step33_email_cf_textbox: "#unaccompanied-minor-minor-email-confirm-field",
    step33_email_err_textbox: '#unaccompanied-minor-minor-email-field-error',
    step33_email_err_cf_textbox: '#unaccompanied-minor-minor-email-confirm-field-error',
    step33_phone_checkbox: '#unaccompanied-minor-minor-contact-type-telephone-field',
    step33_phone_err_msg: '#unaccompanied-minor-minor-phone-number-error', 
    step33_phone_err_cf_msg: '#unaccompanied-minor-minor-phone-number-confirm-error', 
    step33_phone_textbox: '#unaccompanied-minor-minor-phone-number-field',
    step33_phone_err_textbox: '#unaccompanied-minor-minor-phone-number-field-error',
    step33_phone_cf_textbox: '#unaccompanied-minor-minor-phone-number-confirm-field',
    step33_phone_err_cf_textbox: '#unaccompanied-minor-minor-phone-number-confirm-field-error',
    //step34
    cpd_day_textbox: '#unaccompanied_minor_minor_date_of_birth_3i',
    cpd_month_textbox: '#unaccompanied_minor_minor_date_of_birth_2i',
    cpd_year_textbox: '#unaccompanied_minor_minor_date_of_birth_1i',
    step34_dob_err_msg: '#unaccompanied-minor-minor-date-of-birth-error',
    step34_day_err_textbox: "#unaccompanied-minor-minor-date-of-birth-field-error",
    step34_month_err_textbox: "#unaccompanied_minor_minor_date_of_birth_2i",
    step34_year_err_textbox: "#unaccompanied_minor_minor_date_of_birth_1i",
    //step35
    consentform_link: "a[href='/sponsor-a-child/steps/35']",
    step35_pcf_link: "//a[normalize-space()='Read guidance about parental consent forms.']",
    //step36
    consentform_choosefile_button: '#unaccompanied-minor-uk-parental-consent-field',
    consentform_completed_tag: "strong[class='govuk-tag app-task-list__tag ']",
    step36_uk_form_err_msg: "#unaccompanied-minor-uk-parental-consent-error",
    step36_cfile_err_btn: "#unaccompanied-minor-uk-parental-consent-field-error",
    step36_gui_link: "//a[contains(text(),'read the guidance on completing parental consent f')]",
    //step37
    ukrconsentform_link: "a[href='/sponsor-a-child/steps/37']",
    ukrconsentform_choosefile_button: "#unaccompanied-minor-ukraine-parental-consent-field",
    ukrconsentform_completed_tag: "(//strong[contains(@class,'govuk-tag app-task-list__tag')][normalize-space()='Completed'])[2]",
    step37_ukr_form_err_msg: "#unaccompanied-minor-ukraine-parental-consent-error",
    step37_cfile_err_btn: "#unaccompanied-minor-ukraine-parental-consent-field-error",
    //verify completed 4 of 5
    completed_4_of_5_label: "div[class='govuk-width-container'] p:nth-child(3)",
    completed_childs_details: ":nth-child(3) > .app-task-list__items > :nth-child(1) > .govuk-tag",
    completed_consent_form: ":nth-child(4) > .app-task-list__items > :nth-child(2) > .govuk-tag",
    completed_ukrconsent_form: ":nth-child(4) > .app-task-list__items > :nth-child(3) > .govuk-tag",
    //step38
    confirm_data_link: "a[href='/sponsor-a-child/steps/38']",
    confirm_data_checkbox: '#unaccompanied-minor-privacy-statement-confirm-true-field',
    confirm_eligibility_link: "a[href='/sponsor-a-child/steps/39']",
    confirm_eligibility_checkbox: '#unaccompanied-minor-sponsor-declaration-true-field',
    step38_privacy_err_msg: "#unaccompanied-minor-privacy-statement-confirm-error",
    step38_privacy_err_checkbox: "#unaccompanied-minor-privacy-statement-confirm-field-error",
    step38_privacy_link: "#privacy-statement-link",
    //step39
    step39_ctb_err_msg: "#unaccompanied-minor-sponsor-declaration-error",
    step39_ctb_err_checkbox: "#unaccompanied-minor-sponsor-declaration-field-error",
    step39_gui_link: "//a[normalize-space()='guidance for sponsoring a child fleeing Ukraine']",
    //send application
    check_your_answers_link: "a[href='/sponsor-a-child/check-answers']",
    answers_fullname: "//dd[normalize-space()='QA AUTOMATION TEST']",
    answers_othernames: ":nth-child(3) > :nth-child(2) > .govuk-summary-list__value",
    answers_email: ":nth-child(3) > :nth-child(3) > .govuk-summary-list__value",
    answers_mobile: ":nth-child(3) > :nth-child(4) > .govuk-summary-list__value",
    answers_id: " :nth-child(3) > :nth-child(5) > .govuk-summary-list__value",
    answers_dob: " :nth-child(3) > :nth-child(6) > .govuk-summary-list__value",
    answers_nationality: " :nth-child(7) > .govuk-summary-list__value",
    answers_other_nationalities: ":nth-child(3) > :nth-child(8)",
    answers_child_address: ":nth-child(5) > :nth-child(1) > .govuk-summary-list__value",
    answers_over16_name: ":nth-child(5) > :nth-child(2) > .govuk-summary-list__value",
    answers_child_fullname: ":nth-child(7) > :nth-child(1) > .govuk-summary-list__value",
    answers_child_email: ":nth-child(7) > :nth-child(2) > .govuk-summary-list__value",
    answers_child_phone: ":nth-child(7) > :nth-child(3) > .govuk-summary-list__value",
    answers_child_dob: ":nth-child(7) > :nth-child(4) > .govuk-summary-list__value",
    answers_consent1: ":nth-child(7) > :nth-child(5) > .govuk-summary-list__value",
    answers_consent2: ":nth-child(7) > :nth-child(6) > .govuk-summary-list__value",
    answers_agree1: ":nth-child(9) > :nth-child(1) > .govuk-summary-list__value",
    answers_agree2: ":nth-child(9) > :nth-child(2) > .govuk-summary-list__value",
    accept_send: "button[type='submit']",
    app_complete_title: ".govuk-panel__title",
    ref_number: "div[class='govuk-panel__body'] strong",
    gui_link: "//a[contains(text(),'Read the guidance on sponsoring a child from Ukrai')]",
    comp_ano_app: "//a[normalize-space()='complete another application']",
    //links
    fn_cng_link: "(//a[@class='govuk-link'])[3]",
    email_cng_link: "(//a[@class='govuk-link'])[4]",
    mob_cng_link: "(//a[@class='govuk-link'])[5]",
    id_cng_link: "(//a[@class='govuk-link'])[6]",
    dob_cng_link: "(//a[@class='govuk-link'])[7]",
    nat_cng_link: "(//a[@class='govuk-link'])[8]",
    oth_nat_cng_link: "(//a[@class='govuk-link'])[9]",
    child_live_cng_link: "(//a[@class='govuk-link'])[10]",
    child_fn_cng_link: "(//a[@class='govuk-link'])[11]",
    child_email_cng_link: "(//a[@class='govuk-link'])[12]",
    child_dob_cng_link: "(//a[@class='govuk-link'])[13]",
    uk_const_cng_link: "(//a[@class='govuk-link'])[14]",
    ukr_const_cng_link: "(//a[@class='govuk-link'])[15]",
    const_data_share_cng_link: "(//a[@class='govuk-link'])[16]",
    commit_cond_cng_link: "(//a[@class='govuk-link'])[17]",
};
module.exports = page_elements;
