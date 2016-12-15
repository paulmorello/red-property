class ListingsController < ApplicationController

  def index
    
  end

  def sharehouses

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

  def longterm

    @search_city = params[:city].downcase

    @longterm_listings = []

    page = HTTParty.get("https://www.domain.com.au/rent/" + @search_city + "/?terms=" + @search_city)

    parse_page = Nokogiri::HTML(page)
    longterm_results = parse_page.css('div#main.main li.strap')
    longterm_results.each do |item|
      result = {}

      result['photo-url'] = item.search('img')[0]['src']
      result['cost'] = item.search('div.listing-result__property-details p')[0].text
      result['address'] = item.search('div.listing-result__property-details span')[0].text
      result['city'] = item.search('div.listing-result__property-details div.listing-result__address-line-2 span')[0].text
      result['postcode'] = item.search('div.listing-result__property-details div.listing-result__address-line-2 span')[2].text
      result['bed'] = item.search('div.listing-result__property-details div.listing-result__features span')[0].text.gsub(/\s+/, " ")[1].to_f.round(0)
      result['bath'] = item.search('div.listing-result__property-details div.listing-result__features span')[2].text.gsub(/\s+/, " ")[1].to_f.round(0)
      result['car'] = item.search('div.listing-result__property-details div.listing-result__features span')[4].text.gsub(/\s+/, " ")[1].to_f.round(0)

      @longterm_listings.push(result)
    end

    page = HTTParty.get("http://www.gumtree.com.au/s-property-for-rent/" + @search_city + "/k0c18364")

    parse_page = Nokogiri::HTML(page)
    longterm_results = parse_page.css('div.srp__recent-ads li')
    longterm_results.each do |item|
      result = {}

      # check to see if photo exists, otherwise insert placeholder
      if item.search('img')[0] != nil
        result['photo-url'] = item.search('a img')[0]['src']
      else
        result['photo-url'] = "http://placehold.it/350x150"
      end

      result['title'] = item.search('div.ad-listing__info h6').text.gsub(/\s+/, " ")
      result['cost'] = item.search('div.ad-listing__info span.j-original-price').text.strip
      result['city'] = item.search('div.ad-listing__location span.ad-listing__location-area').text.tr(',','')
      result['bed'] = item.search('div.ad-listing__info span.ad-listing__attribute-numberbedrooms_s').text.tr('|','').gsub(/\s+/, " ")[4].to_f.round(0)
      result['bath'] = item.search('div.ad-listing__info span.ad-listing__attribute-numberbathrooms_s').text.tr('|','').gsub(/\s+/, " ")[4].to_f.round(0)

      @longterm_listings.push(result)

    end

    @longterm_listings = @longterm_listings.shuffle

  end

end
