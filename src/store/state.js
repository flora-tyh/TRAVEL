let defaulrCity = '北京'
try {
  if (localStorage.city) {
    defaulrCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaulrCity
}
