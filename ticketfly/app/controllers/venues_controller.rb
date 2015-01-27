class VenuesController < ApplicationController
  before_action :set_venue, only: [:show]

  def index
    @venues = Venue.find_with_reputation(:votes, :all, order: "votes desc")
  end

  def show
  	@venue = Venue.find(params[:id]) #maybe reference songkick_venue_id instead?
  end

  def vote
  	value = params[:type] == "up" ? 1 : -1
  	@venue = Venue.find(params[:id])
  	@venue.add_or_update_evaluation(:votes, value, current_user)
  	redirect_to :back, notice: "Thank your for voting"
  end
  
end