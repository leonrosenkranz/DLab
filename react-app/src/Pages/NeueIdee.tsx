
import { Card, Button, Checkbox, Label, TextInput, Textarea, Select} from "flowbite-react"
import { useState } from "react"

let IdeeText = ""

function NeueIdeePage() {

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
           <Select id="Goals">
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
               id="Ideegeber"/>
            </div>
          </div>
<div className="mb-2 block">
              <Label
                htmlFor="Abteilung"
                value="Welch Abteilungen sind betroffen:"
              />
            </div>
           <Select id="Abteilung">
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
              onChange={getIdeeText}
              value={idee}
            />
            
          </div>
          <Button color="dark" onClick={submit}>
            Submit
          </Button>
        </form>
      </Card>

    )
}

export default NeueIdeePage

function submit() {
    console.log("submited")
    console.log(IdeeText)
    
}

function getIdeeText() { 

}