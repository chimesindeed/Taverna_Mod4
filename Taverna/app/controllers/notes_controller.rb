class NotesController < ApplicationController
  def create
    note = Note.new(note_params)
    if note.save
      render json: note
    else
      flash[:notice] = 'Not Saved'
    end
  end
    
  def show
    note = Note.find(params[:id])
    render json: note
  end
  
  def destroy
    note = Note.find(params[:id]).destroy
    render json: {noteId: note.id}
  end
    
  private
  
  def note_params
    params.require(:note).permit(:body, :item_id)
  end
end
