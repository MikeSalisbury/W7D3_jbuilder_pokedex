# json.extract! @guest, :name, :age, :favorite_color
# json.partial! "./api/partials/guest", guest: @guest

    (json.partial! "./api/partials/guest", guest: @guest)

  json.set! :gifts do
    json.array! @guest.gifts do |gift|
      json.extract! gift, :title, :description
    end
  end
