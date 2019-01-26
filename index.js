var express = require("express");
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

var data = {
    nodes: [{
            id: "1",
            label: "Anna"
        },
        {
            id: "2",
            label: "Maria"
        },
        {
            id: "3",
            label: "Katarzyna"
        },
        {
            id: "4",
            label: "Małgorzata"
        },
        {
            id: "5",
            label: "Agnieszka"
        },
        {
            id: "6",
            label: "Krystyna"
        },
        {
            id: "7",
            label: "Barbara"
        },
        {
            id: "8",
            label: "Ewa"
        },
        {
            id: "9",
            label: "Elżbieta"
        },
        {
            id: "10",
            label: "Zofia"
        },
        {
            id: "11",
            label: "Janina"
        },
        {
            id: "12",
            label: "Teresa"
        },
        {
            id: "13",
            label: "Joanna"
        },
        {
            id: "14",
            label: "Magdalena"
        },
        {
            id: "15",
            label: "Monika"
        },
        {
            id: "16",
            label: "Jadwiga"
        },
        {
            id: "17",
            label: "Danuta"
        },
        {
            id: "18",
            label: "Irena"
        },
        {
            id: "19",
            label: "Halina"
        },
        {
            id: "20",
            label: "Helena"
        },
        {
            id: "21",
            label: "Beata"
        },
        {
            id: "22",
            label: "Aleksandra"
        },
        {
            id: "23",
            label: "Marta"
        },
        {
            id: "24",
            label: "Dorota"
        },
        {
            id: "25",
            label: "Marianna"
        },
        {
            id: "26",
            label: "Grażyna"
        },
        {
            id: "27",
            label: "Jolanta"
        },
        {
            id: "28",
            label: "Stanisława"
        },
        {
            id: "29",
            label: "Iwona"
        },
        {
            id: "30",
            label: "Karolina"
        },
        {
            id: "31",
            label: "Bożena"
        },
        {
            id: "32",
            label: "Urszula"
        },
        {
            id: "33",
            label: "Justyna"
        },
        {
            id: "34",
            label: "Renata"
        },
        {
            id: "35",
            label: "Alicja"
        },
        {
            id: "36",
            label: "Paulina"
        },
        {
            id: "37",
            label: "Sylwia"
        },
        {
            id: "38",
            label: "Natalia"
        },
        {
            id: "39",
            label: "Wanda"
        },
        {
            id: "40",
            label: "Agata"
        },
        {
            id: "41",
            label: "Aneta"
        },
        {
            id: "42",
            label: "Izabela"
        },
        {
            id: "43",
            label: "Ewelina"
        },
        {
            id: "44",
            label: "Marzena"
        },
        {
            id: "45",
            label: "Wiesława"
        },
        {
            id: "46",
            label: "Genowefa"
        },
        {
            id: "47",
            label: "Patrycja"
        },
        {
            id: "48",
            label: "Kazimiera"
        },
        {
            id: "49",
            label: "Edyta"
        },
        {
            id: "50",
            label: "Stefania"
        },
        {
            id: "51",
            label: "Jan"
        },
        {
            id: "52",
            label: "Andrzej"
        },
        {
            id: "53",
            label: "Piotr"
        },
        {
            id: "54",
            label: "Krzysztof"
        },
        {
            id: "55",
            label: "Stanisław"
        },
        {
            id: "56",
            label: "Tomasz"
        },
        {
            id: "57",
            label: "Paweł"
        },
        {
            id: "58",
            label: "Józef"
        },
        {
            id: "59",
            label: "Marcin"
        },
        {
            id: "60",
            label: "Marek"
        },
        {
            id: "61",
            label: "Michał"
        },
        {
            id: "62",
            label: "Grzegorz"
        },
        {
            id: "63",
            label: "Jerzy"
        },
        {
            id: "64",
            label: "Tadeusz"
        },
        {
            id: "65",
            label: "Adam"
        },
        {
            id: "66",
            label: "Łukasz"
        },
        {
            id: "67",
            label: "Zbigniew"
        },
        {
            id: "68",
            label: "Ryszard"
        },
        {
            id: "69",
            label: "Dariusz"
        },
        {
            id: "70",
            label: "Henryk"
        },
        {
            id: "71",
            label: "Mariusz"
        },
        {
            id: "72",
            label: "Kazimierz"
        },
        {
            id: "73",
            label: "Wojciech"
        },
        {
            id: "74",
            label: "Robert"
        },
        {
            id: "75",
            label: "Mateusz"
        },
        {
            id: "76",
            label: "Marian"
        },
        {
            id: "77",
            label: "Rafał"
        },
        {
            id: "78",
            label: "Jacek"
        },
        {
            id: "79",
            label: "Janusz"
        },
        {
            id: "80",
            label: "Mirosław"
        },
        {
            id: "81",
            label: "Maciej"
        },
        {
            id: "82",
            label: "Sławomir"
        },
        {
            id: "83",
            label: "Jarosław"
        },
        {
            id: "84",
            label: "Kamil"
        },
        {
            id: "85",
            label: "Wiesław"
        },
        {
            id: "86",
            label: "Roman"
        },
        {
            id: "87",
            label: "Władysław"
        },
        {
            id: "88",
            label: "Jakub"
        },
        {
            id: "89",
            label: "Artur"
        },
        {
            id: "90",
            label: "Zdzisław"
        },
        {
            id: "91",
            label: "Edward"
        },
        {
            id: "92",
            label: "Mieczysław"
        },
        {
            id: "93",
            label: "Damian"
        },
        {
            id: "94",
            label: "Dawid"
        },
        {
            id: "95",
            label: "Przemysław"
        },
        {
            id: "96",
            label: "Sebastian"
        },
        {
            id: "97",
            label: "Czesław"
        },
        {
            id: "98",
            label: "Leszek"
        },
        {
            id: "99",
            label: "Daniel"
        },
        {
            id: "100",
            label: "Waldemar"
        },
    ],
    edges: [],
    options: {}
}


app.use("/api", function (req, res) {
    var numberOfNodes = req.query.numberOfNodes;
    var ids = getRandomIds(numberOfNodes);
    var n = getNodes(ids);
    var e = getRandomEdges(ids);
    var selectedData = {
        nodes: n,
        edges: e,
        options: {}
    }
    res.send(selectedData).end();
});

function getNodes(ids) {
    var allNodes = data.nodes;
    return allNodes.filter(n => {
        var nodeId = parseInt(n.id);
        return ids.includes(nodeId);
    });
}

function getRandomIds(numberOfNodes) {
    min = Math.ceil(1);
    max = Math.floor(100);
    var randomIds = [];
    while (randomIds.length < numberOfNodes) {
        var id = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomIds.includes(id) == false) {
            randomIds.push(id);
        }
    }
    return randomIds;
}

function getRandomEdges(ids) {
    console.log(ids);
    min = 0;
    max = ids.length - 1;
    console.log(min, max);
    var edges = [];
    for (i = 0; i <= max; i++) {
        var currentId = ids[i];
        while (true) {
            var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
            if (randomIndex != i) {
                console.log(i, randomIndex);
                var randomId = ids[randomIndex];
                console.log("source: " + currentId + " (at " + i + ")", "target: " + randomId + " (at " + randomIndex + ")");
                var e = {
                    from: currentId,
                    to: randomId
                }
                edges.push(e);
                break;
            }
        }
    }
    return edges;
}

var port = process.env.PORT || 1989;

app.listen(port, function () {
    console.log('Server is running on :1989')
});