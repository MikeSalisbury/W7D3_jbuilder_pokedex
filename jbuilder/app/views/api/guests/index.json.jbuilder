

# json.array! @guests do |guest|
#   # json.extract! guest, :name, :age, :favorite_color
#   # json.name guest.name
#   # json.age guest.age
#   # json.favorite_color guest.favorite_color
#   json.partial! "./api/partials/guest", guest: guest
# end

json.array! @guests, partial: "./api/partials/guest", as: :guest
