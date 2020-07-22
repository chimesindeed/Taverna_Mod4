# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  items = Item.create([
                          { :name => 'Bagel w. CC' },
                          { :name => 'Pastrami Sandwich' },
                          { :name => 'Classic Cheesburger' },
                          { :name => 'Meatloaf' }
                        ])
#   Character.create(name: 'Luke', movie: movies.first)
