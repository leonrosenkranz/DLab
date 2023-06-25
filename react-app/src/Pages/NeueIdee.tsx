
import { Card, Button, Checkbox, Label, TextInput, Textarea, Select} from "flowbite-react"
import { useState } from "react"

let IdeeText = ""

function NeueIdeePage() {


    const [idee, setIdee] = useState({descript: "",
                                      Author: "",
                                      Dept: "",
                                      Goal: "",
                                      titel: ""

})
    return (  
             <Card className="bg-opacity-50 hover:bg-red-700 h-full ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
            Neue Idee
        </p>
      </h5>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Welche Problem wollen wir lösen:"
              />
            </div>
           <Select id="Goals"
           onChange={handleGoalChange}
           >
            <option>Emissionen In der Produktion reduzieren</option>
            <option>Nutzung nachhaltiger Verkehrsmittel</option>
            <option>Minimierung des Papierverbrauchs</option>
            </Select> 
          </div>
          <div>
            <div className="mb-2 block">
               <Label
               htmlFor="Ideegeber"
               value="Ideengeber"/>
               <TextInput
               id="Ideegeber"
               onChange={handleAuthorChange}/>
            </div>
          </div>
<div className="mb-2 block">
              <Label
                htmlFor="Abteilung"
                value="Welch Abteilungen sind betroffen:"
              />
            </div>
           <Select id="Abteilung"
           onChange={handleDeptChange}>
            <option>Produktion</option>
            <option>Managment</option>
            <option>IT</option>
            </Select> 
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="Idee"
                value="Beschreibung"
              />
            </div>
            <Textarea
              id="Idee"
              required
              onChange={handleDescriptChange}
              value={idee.descript}
            />
            
          </div>
          <Button color="dark" onClick={submit}>
            Submit
          </Button>
        </form>
      </Card>

    )

    function submit() {
        console.log(JSON.stringify(idee))
        fetch("http://localhost:3000/ideas",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(idee)
        })
    }
    
    function handleDescriptChange(e: any){
        setIdee({
            ...idee,
            descript: e.target.value
        })
    }

    function handleGoalChange(e: any){
        setIdee({
            ...idee,
            Goal: e.target.value
        })
        
    }

    function handleAuthorChange(e: any){
        setIdee({
            ...idee,
            Author: e.target.value
        })

    }

    function handleDeptChange(e: any){
        setIdee({
            ...idee,
            Dept: e.target.value
        })

    }
}

export default NeueIdeePage


function getIdeeText() { 
console.log("")
}