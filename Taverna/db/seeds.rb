# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  Item.create([
                          { :name => 'Bagel w. CC' },
                          { :name => 'Pastrami Sandwich' },
                          { :name => 'Classic Cheesburger' },
                          { :name => 'Meatloaf' }
                        ])
  Note.create([

                          { :body => 'Raise Price', :item_id => 1},
                          { :body => 'Not selling; to remove from menu', :item_id => 2},
                          { :body => 'Add an extra slice of cheese', :item_id => 3},
                          { :body => 'Think of Nostalgic name for Meatloaf', :item_id => 4}
                          
  ])
