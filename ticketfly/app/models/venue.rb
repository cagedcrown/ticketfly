class Venue < ActiveRecord::Base
	has_many :votes, through: :users
	has_many :comments, through: :users

	has_reputation :votes, source: :user, aggregated_by: :sum

end
