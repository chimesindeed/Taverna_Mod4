class ItemsController < ApplicationController
  def index
    items = Item.all

    render json: items
  end

  def create
    binding.pry
    item = Item.create(item_params)

    render json: item
end

  private

  def item_params
    params.require(:item).permit(:name)
  end
end
