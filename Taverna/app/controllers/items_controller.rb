class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      flash[:notice] = 'Not Saved'
    end
  end
  
  def show
    item = Item.find(params[:id])
    render json: item
  end
  def destroy
    binding.pry
    item = Item.find(params[:id])
    render json: {itemId: item.id}
  end
  
  private
  def item_params
    params.require(:item).permit(:name, :price)
  end
end
