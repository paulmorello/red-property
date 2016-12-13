class ListingsController < ApplicationController

  def index
    @flatmates_listings = [];
  end

  def flatmates

    @search_city = params[:city].downcase

    @flatmates_listings = []

    page = HTTParty.get('https://flatmates.com.au/rooms/' + @search_city)

    parse_page = Nokogiri::HTML(page)
    flatmates_results = parse_page.css('div#search-results div.content-column')
    flatmates_results.each do |item|
      result = {}

      result['photo-url'] = item.search('a.hero img')[0]['src']
      result['cost'] = item.search('div.ribbon')[0].text.tr('New|','').strip
      result['city'] = item.search('h2 a')[0].text
      result['description'] = item.search('p')[0].text
      result['bed'] = item.search('div.listing-brief span')[1].text.to_f.round(0)
      result['bath'] = item.search('div.listing-brief span')[2].text.to_f.round(0)

      # a check to see if the listing has a number of occupants
      if item.search('div.listing-brief span')[5] != nil
        result['occupants'] = item.search('div.listing-brief span')[5].text.to_f.round(0)
      else
        result['occupants'] = ''
      end

      @flatmates_listings.push(result)
    end

  end

end
