class VenuesController < ApplicationController

  before_action :set_venue, only: [:show]

  def index
    @venues = Venue.all
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end