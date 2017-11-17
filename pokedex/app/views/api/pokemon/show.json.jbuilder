json.set! @pokemon.id do
  json.partial! './api/partials/pokemon_partial', pokemon: @pokemon
  json.items @items
end
json.set! :items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
    end
  end
end
