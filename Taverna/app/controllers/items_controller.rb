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

  def edit
  end

  def update
  end
  
  def destroy
    item = Item.find(params[:id])
    render json: {itemId: item.id}
  end
  
  private
  def item_params
    params.require(:item).permit(:name, :price)
  end
end
