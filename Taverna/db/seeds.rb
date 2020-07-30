# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  Item.create([
                          { :name => 'Bagel w. CC', :price => 3.25},
                          { :name => 'Pastrami Sandwich', :price => 6.95 },
                          { :name => 'Classic Cheesburger', :price => 8.75 },
                          { :name => 'Meatloaf', :price => 7.25 },
                          { :name => 'Greek Omelette', :price => 7.75 },
                          { :name => 'Chicken Noodle Soup', :price => 3.25 },
                          { :name => 'French Toast', :price => 5.95 },
                          { :name => 'Cheese Sticks-side', :price => 5.95 }
                      
                        ])
  Note.create([

                          { :body => 'Raise Price', :item_id => 1},
                          { :body => 'Note 2', :item_id => 1},
                          { :body => 'Not selling; to remove from menu', :item_id => 2},
                          { :body => 'Add an extra slice of cheese', :item_id => 3},
                          { :body => 'Think of Nostalgic name for Meatloaf', :item_id => 4}
                          
  ])
