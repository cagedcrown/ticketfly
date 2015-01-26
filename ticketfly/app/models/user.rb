class User < ActiveRecord::Base
	has_many :votes
	has_many :comments

	def self.from_omniauth(auth)
		where(auth.slice("provider", "uid")).first || create_from_omniauth(auth)
	end

	def self.create_from_omniauth(auth)
		create! do |user|
			user.provider = auth["provider"]
			user.uid = auth["uid"]
			user.name = auth["info"]["nickname"]
		end
	end

	def index
		@user = current_user.id
	end
end
