json.set! :pokemon do
  json.partial! './api/partials/pokemon_partial', pokemon: @pokemon
end
json.set! :items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end
