const Coment = require("./model/coment")


class FakeDb {
    constructor() {
        this.coments = [
        {userName: '松井', userComent: '寒くなったな〜'},
        {userName: '平野', userComent: 'そうでもない'},
        {userName: '木村', userComent: '確かに'},
        {userName: '市川', userComent: 'ってか暑い'},
        ]
    }

async initDb() {
    await this.cleanDb()
    this.pushComentsToDb()
}

async cleanDb() {
    await Coment.deleteMany({})
}

pushComentsToDb() {
    this.coments.forEach(
        (coment) => {
            const newComent = new Coment(coment)
            newComent.save()
        }
)}

seeDb() {
    this.pushComentsToDb()
}
}

module.exports = FakeDb