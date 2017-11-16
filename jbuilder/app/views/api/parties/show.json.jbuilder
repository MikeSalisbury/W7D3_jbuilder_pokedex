
json.extract! @party, :name

json.set! :guests do
  json.array! @guests do |guest|
    json.extract! guest, :name, :age, :favorite_color

    json.set! :gifts do
      json.array! guest.gifts do |gift|
        json.extract! gift, :title, :description
      end
    end
  end
end

# json.set! :guests_gifts do
#   json.array! @gifts do |gift|
#     json.extract! gift, :title, :description
#   end
# end
