require "rails_helper"

RSpec.describe RoutingEngine, type: :model do
  describe "getting next step without routing" do
    it "when current to next step is incremental" do
      application = AdditionalInfo.new

      expect(RoutingEngine.get_next_step(application,1)).to be(2)
      expect(RoutingEngine.get_next_step(application,2)).to be(3)
      expect(RoutingEngine.get_next_step(application,3)).to be(4)
      expect(RoutingEngine.get_next_step(application,4)).to be(5)
    end

    it "when next step is dependent on host question" do
      application = AdditionalInfo.new

      application.residential_host = "Yes"
      expect(RoutingEngine.get_next_step(application, 5)).to be(6)
      application.residential_host = "Yes"
      expect(RoutingEngine.get_next_step(application, 6)).to be(11)
      application.residential_host = "No"
      expect(RoutingEngine.get_next_step(application, 5)).to be(7)
    end

    it "when next step is dependent on more properties question" do
      application = AdditionalInfo.new

      application.more_properties = "Yes"
      expect(RoutingEngine.get_next_step(application, 9)).to be(10)
      application.more_properties = "No"
      expect(RoutingEngine.get_next_step(application, 9)).to be(11)
    end
  end
end
