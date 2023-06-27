class Chip{
    constructor(name, dmg = 0,ef = "",letter = '',type = 0,des = '')
    {
        this.name = name;
        this.dmg = dmg;
        this.ef = ef;
        this.letter = letter;
        this.type = type;
        this.des = des;
    }
    getName()
    {
        return this.name;
    }
    getDmg()
    {
        return this.dmg;
    }
    getEf()
    {
        return this.ef;
    }
    getLetter()
    {
        return this.letter;
    }
    getType()
    {
        return this.type;
    }
    getDes()
    {
        return this.des;
    }
    setDmg(dmg)
    {
        this.dmg = dmg;
    }
    setEf(ef)
    {
        this.ef = ef;
    }
    setLetter(letter)
    {
        this.letter = letter;
    }
    setType(type)
    {
        this.type = type;
    }
    setDes(des)
    {
        this.des = des;
    }
    setName(name)
    {
        this.name = name;
    }
}

module.exports = Chip;