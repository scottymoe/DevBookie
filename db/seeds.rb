require "faker"

User.create(email:"test1@test.com", password:"123456")
10.times do 
  b = Bet.create(
  name: Faker::Company.name,
  description: Faker::Company.industry,
  amount: Faker::Lorem.sentence,
  team: Faker::Address.city,
  spread: Faker::Date.in_date_period,
  teaser: Faker::Quote.yoda,
  )
end

puts 'data seeded'