module Eco
  module Source
    VERSION = "1.1.0.rc.3"

    def self.bundled_path
      File.expand_path("../eco.js", __FILE__)
    end
  end
end
