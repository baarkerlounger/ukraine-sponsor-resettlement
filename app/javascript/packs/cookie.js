
(function(Modules) {
    'use strict'

    function CookieModule ($module) {
        this.$module = $module;

    }
    CookieModule.prototype.init = function($module) {   
        this.accept = this.$module.querySelector('[data-accept-cookies]')
        this.$module.message = this.$module.querySelector('.govuk-cookie-banner___message')
        this.$module.confirmationMessage = this.$module.querySelector('.govuk-cookie-banner___confirmation')
        this.$module.confirmationMessage.style.display = 'none';
        this.hideCookie = this.$module.querySelector('[data-hide-cookie-message]')
        this.$module.cookieAcceptedCopy = this.$module.querySelector('.cookie-accepted__status')

        this.cookies_policy = JSON.parse(Utils.getCookie('cookies_policy', '{}'))
        this.cookies_preferences_set = Utils.getCookie('cookies_preferences_set') === 'true'
        this.$module.showAcceptConfirmation = this.showAcceptConfirmation.bind(this);
        this.$module.showRejectConfirmation = this.showRejectConfirmation.bind(this);



        this.$module.querySelector('[data-accept-cookies]').addEventListener('click', this.acceptCookies.bind(this))
        this.$module.querySelector('[data-reject-cookies]').addEventListener('click', this.rejectCookies.bind(this))

        this.$module.querySelector('[data-hide-cookie-message]').addEventListener('click', this.hideCookieMessage.bind(this))

        this.showBanner()
    }

    CookieModule.prototype.showBanner = function () {
        var meta = Utils.acceptedAdditionalCookies(this.cookies_policy);
        console.log(meta)
    
        if (this.cookies_preferences_set) {
          this.$module.hidden = true;
        } else {
          this.$module.hidden = false;
        //   this.$module.confirmAccept.hidden = !meta.responded || !meta.acceptedAdditionalCookies;
        //   this.$module.confirmReject.hidden = !meta.responded || meta.acceptedAdditionalCookies;
    
          // XXX this prevents the banner from displaying in future whether or not the user
          // interacts with it - is this what we want?
        //   Utils.setCookie('cookies_preferences_set', 'true', {'days': 365});
        }
      }

        CookieModule.prototype.acceptCookies = function () {
        this.$module.showAcceptConfirmation()
        Utils.setCookie('cookies_policy', JSON.stringify(Utils.ALL_COOKIES), {'days': 365})
        Utils.setCookie('cookies_preferences_set', 'true', {'days': 365})
      }

      CookieModule.prototype.rejectCookies = function () {
        console.log("CookieBanner.rejectCookies: setting ESSENTIAL_COOKIES")
        this.$module.showRejectConfirmation();
        Utils.setCookie('cookies_policy', JSON.stringify(Utils.ESSENTIAL_COOKIES), {'days': 365})
        Utils.setCookie('cookies_preferences_set', 'true', {'days': 365})
      }

      CookieModule.prototype.showAcceptConfirmation = function () {
        this.$module.message.style.display = 'none'
        this.$module.confirmationMessage.style.display = 'block';
        this.$module.cookieAcceptedCopy.innerText =  'You’ve Accepted additional cookies. '
      }

      CookieModule.prototype.showRejectConfirmation = function () {
        this.$module.message.style.display = 'none'
        this.$module.confirmationMessage.style.display = 'block';
        this.$module.cookieAcceptedCopy.innerText = 'You’ve Rejected additional cookies.'

      }


      CookieModule.prototype.hideCookieMessage = function () {
        this.$module.hidden = true;

      }




    Modules.CookieModule = CookieModule

    document.addEventListener('DOMContentLoaded', function () {
        var body = document.querySelector('.govuk-template__body')
        var el = document.createElement("div");

        el.innerHTML += `<div class="govuk-cookie-banner " data-nosnippet role="region" aria-label="Cookies on [name of service]">
        <div class="govuk-cookie-banner__message govuk-width-container govuk-cookie-banner___message">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-two-thirds">
              <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on [name of service]</h2>
              <div class="govuk-cookie-banner__content">
                <p class="govuk-body">We use some essential cookies to make this service work.</p>
                <p class="govuk-body">We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
              </div>
            </div>
          </div>
          <div class="govuk-button-group">
            <button value="accept" type="button" name="cookies" data-accept-cookies="1" class="govuk-button" data-module="govuk-button">
              Accept analytics cookies
            </button>
            <button value="reject" type="button" name="cookies" data-reject-cookies="1" class="govuk-button" data-module="govuk-button">
              Reject analytics cookies
            </button>
            <a class="govuk-link" href="#">View cookies</a>
          </div>
        </div>

        <div class="govuk-cookie-banner__message govuk-width-container govuk-cookie-banner___confirmation" >

          <div class="govuk-grid-row">
            <div class="govuk-grid-column-two-thirds">

              <div class="govuk-cookie-banner__content">
                <p class="govuk-body cookie-accepted__status">You’ve Accepted additional cookies.                       
                You can <a class="govuk-link" href="/cookies">change your cookie settings</a> at any time.</p>

              </div>
            </div>
          </div>

          <div class="govuk-button-group">
          <button value="reject" type="button" name="cookies" data-hide-cookie-message="1" class="govuk-button" data-module="govuk-button">
          Hide Cookie Message
        </button>        
      </div>
        </div>
      </div>`

     body.insertBefore(el, body.firstChild);

      const nodes = document.querySelectorAll('.govuk-cookie-banner')

        for (var i = 0, length = nodes.length; i < length; i++) {
          new CookieModule(nodes[i]).init();
        }
      });
  })(window.GOVUK.Modules)