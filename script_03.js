const turnover_average = (users.reduce(
    (sum, user) => (sum += user.revenue
    ), 0) / users.length).toFixed(2)

console.log(turnover_average)

//////////////////////////////////////////////////////////////////////////////////

const turnover_per_for_more_zero = (users.filter(
    user => user.revenue != 0
).length * 100 / users.length).toFixed(2)

console.log(turnover_per_for_more_zero)

//////////////////////////////////////////////////////////////////////////////////

const turnover_average_per_for_more_zero = (users.filter(
    user => user.revenue != 0)
    .reduce((sum, user) => (sum += user.revenue), 0) /
    (users.filter(user => user.revenue != 0).length)).toFixed(2)

console.log(turnover_average_per_for_more_zero)

//////////////////////////////////////////////////////////////////////////////////

const profit = users.reduce((sum, user) => (sum += user.revenue), 0) / 100

console.log(profit + "€")

//////////////////////////////////////////////////////////////////////////////////

const num_of_users_in_france = users.filter(user => user.country == "France").length

console.log(num_of_users_in_france)

//////////////////////////////////////////////////////////////////////////////////

const num_of_users_in_france_payed = users.filter(user => user.country == "France" && user.revenue != 0).length

console.log(num_of_users_in_france_payed)

//////////////////////////////////////////////////////////////////////////////////

// const turnover_by_country = (array) => {

//     var users_by_country = users.filter(user => user.country == "Germany" || user.country == "United States" || user.country == "France" ||user.country == "Great Britain" )

//     users(country => users.reduce((sum, user) => {
//         if (country == user.country) {
//             sum += user.revenue
//         }
//     }, 0)
//     )
//     console.log(`Le chiffre d'affaire dans ces payes est:${sum}`)

// }

// turnover_by_country(users)


users_fr = users.reduce((turnover, arr) => {
    if (arr.country == "France") {
        turnover += arr.revenue
    }
}, 0)


console.log(users_fr)

///////////////////////////////////////////////////////////////////////////////////////////////

const list_of_countries = users.filter(user => user.revenue != 0)
    .map((user) => (user.country))

const list_of_countries_with_turnover = list_of_countries.filter((country, index) => list_of_countries.indexOf(country) === index)


console.log(list_of_countries_with_turnover)

///////////////////////////////////////////////////////////////////////////////////////////////

// const list_of_five_users_turnover = users.sort((a, b) => {
//     return b.revenue - a.revenue
// })


// console.log(list_of_five_users_turnover)

/////////////////////////////////////////////////////////////////////////////////////////////

const sum_men = users.filter((user) => (user.sex == "M"))
    .reduce((sum, user) => (sum += user.revenue), 0)

const sum_women = users.filter((user) => (user.sex == "F"))
    .reduce((sum, user) => (sum += user.revenue), 0)

if (sum_women > sum_men) {
    console.log("Les femmes rapportent plus de gain")
}
else if (sum_women < sum_men) {
    console.log("Les hommes rapportent plus de gain")
}
else {
    console.log("Les femmes et les homme rapportent la même chose")
}

/////////////////////////////////////////////////////////////////////////////////////////////

const list_of_user = users.filter((user) => (user.revenue >= 7500))

console.log(list_of_user)

/////////////////////////////////////////////////////////////////////////////////////////////

const percentage_of_user_payed_in_hundred = users.slice(0, 100)
    .filter(user => user.revenue != 0).length

console.log(`${percentage_of_user_payed_in_hundred}%`)