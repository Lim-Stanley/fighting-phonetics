// Takes in a table with headings of colspan 2, headers for each row, and rows
class Recommender{
    constructor(appName, headings, headers, rows){
        this.name = appName
        this.symbols = []
        this.headings = headings
        this.headers = headers
        this.rows = rows
        this.prev = null
    }

    setSymbols() {
        let ans = []
        this.rows.foreach(row => row.foreach(elem => elem != '' ? ans.push(elem) : null) )
        this.rankOf = ans
    }

    get getRec() {
        let ans = this.symbols[Math.floor(Math.random() * this.symbols.length)]
        while (ans == this.prev) {
            ans = this.symbols[Math.floor(Math.random() * this.symbols.length)]
        }
        this.prev = ans
        return ans
    }
}

export default Recommender