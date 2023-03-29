import { useEffect, useState } from 'react';
import './Popup.css';
// import { getCurrentTabUId } from './chrome/utils';
// import { ChromeMessage, Sender } from './types';
import { Button} from '@nextui-org/react';
import { DeleteIcon } from "../src/icons/DeleteIcon";
import { Table, Text } from "@nextui-org/react";
import { LinkService } from './service/LinkService';
export default () => {

  const [url, setUrl] = useState<string|undefined>('');
  const [urls, setUrls] = useState<any|any>([]);
  const [savedLinks, setSavedLinks] = useState<any|any>([]);
  const [responseFromContent, setResponseFromContent] = useState<string>('');


  useEffect(() => {  
    const queryInfo = {active: true, lastFocusedWindow: true};
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        // const url = tabs[0].url;
        // console.log(tabs)
        setUrls(tabs);
    });
    getItems()
  },[]);


const getItems =async ()=>{
  await chrome.storage.sync.get("links").then((result) => {
    // console.log( result);
    setSavedLinks(result)

  });
}
const saveItem =async ()=>{
  
  try{
    let key = "links"
  
  }
  catch(e){
    console.log(e)
  }




  
}
return (
    <div className="popupContainer">
     <p>
     <Text
        h2
        // size={60}
        css={{
          marginLeft:"20px",
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        link4Later
      </Text>

    <Button color="gradient"  css={{
          marginLeft:"20px"
        }} size={'xs'}
        onClick={saveItem}
        >Snapshot</Button>
     <Table
      lined
      headerLined
      shadow={false}
     
      selectionMode="single"
      aria-label="Example static collection table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header >
        <Table.Column isRowHeader={false} hideHeader={true}> Title </Table.Column>
        <Table.Column isRowHeader={false} hideHeader={true}>  </Table.Column>
      </Table.Header>
   
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>http://localhost:3000</Table.Cell>
            <Table.Cell>
              <DeleteIcon size={20} fill="#FF0080" height={undefined} width={undefined} />
              </Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>http://localhost:3000</Table.Cell>
            <Table.Cell>
              <DeleteIcon size={20} fill="#FF0080" height={undefined} width={undefined} />
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>

    </Table>
     </p>
    
   
    </div>
);
}
