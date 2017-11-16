class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all
    @parties.includes(:guests)
    render :index
  end

  def show
    @party = Party.includes(guests: [:gifts]).find_by(id: params[:id])
    @guests = @party.guests
    @guests.includes(:gifts)
    render :show
  end
end
