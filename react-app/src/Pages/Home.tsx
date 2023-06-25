import {Card, Table, Progress, Button, ListGroup, Alert} from "flowbite-react"
import {BiCommentDetail} from "react-icons/Bi"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
function HomePage() {
    return (
        <div>
            <div className="bg-gray-300 bg-opacity-50 rounded-lg text-center p-4 m-4"> Ritto & Fuch x SustainChallenge</div>
        <div className="flex flex-col space-y-4 pt-4">
        <div className="flex space-x-4">
             <Card
      className="max-w-sm border-4 bg-opacity-50 hover:bg-red-700"
      href="#"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
            Unsere Ziele 
        </p>
      </h5>
      <Table>
        <Table.Head>
            <Table.HeadCell>
                Was wir erreichen wollen:
            </Table.HeadCell>
            <Table.HeadCell>
                Progress
            </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
        <Table.Row>
            <Table.Cell>
                Emissionen in der Produktion Reduzieren 
            </Table.Cell>
            <Table.Cell>
                <Progress labelProgress progress={40} progressLabelPosition="outside" color="green"/>
            </Table.Cell>

        </Table.Row>
        <Table.Row>
            <Table.Cell>
                Minimierung des Papierverbrauchs
            </Table.Cell>
            <Table.Cell>
                <Progress labelProgress progress={75} progressLabelPosition="outside" color="green"/>
            </Table.Cell>

        </Table.Row>
        <Table.Row>
            <Table.Cell>
                Nutzung nachhaltiger Verkehrsmittel
            </Table.Cell>
            <Table.Cell>
                <Progress labelProgress progress={25} progressLabelPosition="outside" color="green"/>
            </Table.Cell>

        </Table.Row>

            </Table.Body>
      </Table>
      <Button color="dark">Mehr</Button>
    </Card>
   <Card
      className="max-w-sm border-4 relative bg-opacity-50 hover:bg-red-700"
      href="#"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
            Neue Ideen
        </p>
      </h5>
      <Table>
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    Zug Nutzung im Inland
                </Table.Cell>
                <Table.Cell>
                    <BiCommentDetail/>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    Keine Abrechnungen ausdrucken 
                </Table.Cell>
                <Table.Cell>
                    <BiCommentDetail/>
                </Table.Cell>
            </Table.Row>

        </Table.Body>
      </Table>
      <Button color="dark" >Mehr</Button>
    </Card>

        </div>
        <div className="flex space-x-4">
        <Card
      className="max-w-sm border-4 bg-opacity-50 hover:bg-red-700"
      href="#"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
            ESG News
        </p>
      </h5>
      <ListGroup>
        <ListGroup.Item>
            Google CEO spendet 10mio für den Kampf gegen Klimawandel
        </ListGroup.Item>
        <ListGroup.Item>
            Elon Musk baut neuen Solarpark vor Nairobi
        </ListGroup.Item>
        <ListGroup.Item>
            Nobelpreis geht an Klimaforscher
        </ListGroup.Item>
      </ListGroup>
<Button color="dark" >Mehr</Button>

          </Card>
   <Card
      className="max-w-sm border-4 bg-opacity-50 hover:bg-red-700"
      href="#"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
            Deine Ideen
        </p>
      </h5>
      <Table>
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    Kein Einwegplastik auf Events
                </Table.Cell>
                <Table.Cell>
                    <AiFillEdit/>
                </Table.Cell>
                <Table.Cell>
                    <AiFillDelete/>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    Keine Klimaanlage mehr
                </Table.Cell>
                <Table.Cell>
                    <AiFillEdit/>
                </Table.Cell>
                <Table.Cell>
                    <AiFillDelete/>
                </Table.Cell>

            </Table.Row>

        </Table.Body>
      </Table>
<Button color="dark" >Mehr</Button>

    </Card>


        </div>
</div>
</div>
    )
}

export default HomePage