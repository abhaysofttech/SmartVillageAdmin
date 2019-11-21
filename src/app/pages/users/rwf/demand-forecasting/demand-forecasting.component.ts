import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { commonService } from 'src/app/services/shared.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-demand-forecasting',
  templateUrl: './demand-forecasting.component.html',
  styleUrls: ['./demand-forecasting.component.css']
})
export class DemandForecastingComponent implements OnInit {

  private tableOptions =  [
    {
      headerName: "Demand ID",
      field: "demfcastid",
      width: 100,
      sortDirection: "asc",
      type: "number",
      searchText: "",
      cellRenderer: "agGroupCellRenderer"
    },
    {
      headerName: "Opportunity Id",
      field: "opportunityidsfdc",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Opportunity Desc",
      field: "opportunitydesc",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Client Manager",
      field: "clientmanager",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 200
    }, {
      headerName: "Customer Dept/Program",
      field: "customerdept",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    }, {
      headerName: "Assigned To",
      field: "assignee",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 200
    },
    {
      headerName: "Created By(EM)",
      field: "emstaffid",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Created On",
      field: "creationdate",
      sortDirection: "asc",
      type: "date",
      searchText: "",
      width: 100
    },
    {
      headerName: "Offshore Delivery Center Head",
      field: "odch",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Engagement Manager",
      field: "emstaffid",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Onsite Delivery Head",
      field: "odmstaffid",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Delivery Head",
      field: "dhstaffid",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Program Manager",
      field: "pgmstaffid",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Skill Family",
      field: "skillfamily",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Primary Skill",
      field: "primaryskillset",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Secondary Skill",
      field: "secondaryskillset",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Location",
      field: "location",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Date Demand Received",
      field: "demandreceiveddate",
      sortDirection: "asc",
      type: "date",
      searchText: "",
      width: 100
    },
    {
      headerName: "Ramp Down(Yes/No)",
      field: "rampdown",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Demand Status",
      field: "demandstatus",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Remark",
      field: "remarks",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Probability (in %)",
      field: "probability",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "No of Position",
      field: "numberofpositions",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Total Billing loss(in $)",
      field: "billing_loss_days",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Total Billing loss(in Days)",
      field: "billing_loss_days",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Billing Rate",
      field: "billingrate",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    },
    {
      headerName: "Fulfilled Status",
      field: "numberofpositionsfilled",
      sortDirection: "asc",
      type: "number",
      searchText: "",
      width: 100
    },
    {
      headerName: "Billing Start Date",
      field: "billingstartdate",
      sortDirection: "asc",
      type: "string",
      searchText: "",
      width: 100
    }
  ]

private listData = [
  {
  "demfcastid": "6",
  "creationdate": "2017-08-11",
  "createdby": "gaverma",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "GV_GP_01",
  "opportunitydesc": "NetACAD",
  "portfolio": " GSE",
  "category": "NETACAD ACADEMY",
  "emstaffid": "GAURAV P VERMA",
  "odmstaffid": "Amit Grover",
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Scripting Languages",
  "primaryskillset": "PHP",
  "secondaryskillset": "PHP",
  "location": " San Jose",
  "numberofpositions": "1",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2017-11-01",
  "probability": "80",
  "demandstatus": "Open",
  "demandreceiveddate": "2017-07-24",
  "rampdown": "NO",
  "remarks": "Netacad,Nextgen,austin",
  "assignee": "GIRISH KUMAR PUROHIT",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": null,
  "customerdept": null,
  "clientmanager": null,
  "billing_loss_days": null,
  "children": [{
    "demfcastid": "6 Second Level",
    "creationdate": " Second Level 2017-08-11",
    "createdby": "Second Levelgaverma",
    "lastupdationdate": null,
    "lastupdatedby": null,
    "opportunityidsfdc": "GV_GP_01",
    "opportunitydesc": "NetACAD",
    "portfolio": " GSE",
    "category": "NETACAD ACADEMY",
    "emstaffid": "GAURAV P VERMA",
    "odmstaffid": "Amit Grover",
    "dhstaffid": "SANDEEP S DESHMUKH",
    "pgmstaffid": "GIRISH KUMAR PUROHIT",
    "skillfamily": " Scripting Languages",
    "primaryskillset": "PHP",
    "secondaryskillset": "PHP",
    "location": " San Jose",
    "numberofpositions": "1",
    "numberofpositionsfilled": "100.00",
    "billingstartdate": "2017-11-01",
    "probability": "80",
    "demandstatus": "Open",
    "demandreceiveddate": "2017-07-24",
    "rampdown": "NO",
    "remarks": "Netacad,Nextgen,austin",
    "assignee": "GIRISH KUMAR PUROHIT",
    "odch": "AVINASH PANDURANG KALE",
    "billingloss": null,
    "billingrate": null,
    "customerdept": null,
    "clientmanager": null,
    "billing_loss_days": null,
    "children": [{
      "demfcastid": "6 Third Level",
      "creationdate": " Third Level 2017-08-11",
      "createdby": "Third Levelgaverma",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "GV_GP_01",
      "opportunitydesc": "NetACAD",
      "portfolio": " GSE",
      "category": "NETACAD ACADEMY",
      "emstaffid": "GAURAV P VERMA",
      "odmstaffid": "Amit Grover",
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Scripting Languages",
      "primaryskillset": "PHP",
      "secondaryskillset": "PHP",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2017-11-01",
      "probability": "80",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-07-24",
      "rampdown": "NO",
      "remarks": "Netacad,Nextgen,austin",
      "assignee": "GIRISH KUMAR PUROHIT",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": null,
      "customerdept": null,
      "clientmanager": null,
      "billing_loss_days": null
    }]
  }]
}, {
  "demfcastid": "8",
  "creationdate": "2017-08-11",
  "createdby": "gaverma",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "GV_GP_02",
  "opportunitydesc": "NetACAD",
  "portfolio": " GSE",
  "category": "NETACAD ACADEMY",
  "emstaffid": "GAURAV P VERMA",
  "odmstaffid": "Amit Grover",
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Scripting Languages",
  "primaryskillset": "PHP",
  "secondaryskillset": "PHP",
  "location": " San Jose",
  "numberofpositions": "1",
  "numberofpositionsfilled": "0.00",
  "billingstartdate": "2017-11-01",
  "probability": "50",
  "demandstatus": "Open",
  "demandreceiveddate": "2017-07-24",
  "rampdown": "NO",
  "remarks": "Netacad,Nextgen,austin",
  "assignee": "NA",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": null,
  "customerdept": null,
  "clientmanager": null,
  "billing_loss_days": null
}, {
  "demfcastid": "13",
  "creationdate": "2017-11-17",
  "createdby": "GV21783",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "GV_GP_03",
  "opportunitydesc": "NetACAD)Testing",
  "portfolio": null,
  "category": null,
  "emstaffid": "GAURAV P VERMA",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Oracle",
  "primaryskillset": "PL/SQL",
  "secondaryskillset": "HTML",
  "location": " Pune",
  "numberofpositions": "2",
  "numberofpositionsfilled": "50.00",
  "billingstartdate": "2017-10-30",
  "probability": "80",
  "demandstatus": "Open",
  "demandreceiveddate": "2017-10-27",
  "rampdown": "NO",
  "remarks": "Billing starts after associates onboarding",
  "assignee": "DEEPALI PRAMOD BELSARE",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "23",
  "customerdept": "NETACAD",
  "clientmanager": "Parminder",
  "billing_loss_days": null
}, {
  "demfcastid": "14",
  "creationdate": "2017-11-17",
  "createdby": "GV21783",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "GV_GP_04",
  "opportunitydesc": "NetACAD-Docker-Lead Expert",
  "portfolio": null,
  "category": null,
  "emstaffid": "GAURAV P VERMA",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Platform and server administration",
  "primaryskillset": "AWS",
  "secondaryskillset": "Unix/Linux",
  "location": " Pune",
  "numberofpositions": "1",
  "numberofpositionsfilled": "0.00",
  "billingstartdate": "2017-10-17",
  "probability": "80",
  "demandstatus": "Open",
  "demandreceiveddate": "2017-10-10",
  "rampdown": "NO",
  "remarks": "Billing starts after associates onboarding",
  "assignee": "DEEPALI PRAMOD BELSARE",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "26",
  "customerdept": "NETACAD",
  "clientmanager": "Parminder",
  "billing_loss_days": null
}, {
  "demfcastid": "15",
  "creationdate": "2017-11-17",
  "createdby": "GV21783",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "GV_GP_05",
  "opportunitydesc": "NetACAD-Docker-Expert",
  "portfolio": null,
  "category": null,
  "emstaffid": "GAURAV P VERMA",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Platform and server administration",
  "primaryskillset": "AWS",
  "secondaryskillset": "Unix/Linux",
  "location": " Pune",
  "numberofpositions": "1",
  "numberofpositionsfilled": "0.00",
  "billingstartdate": "2017-10-17",
  "probability": "80",
  "demandstatus": "Open",
  "demandreceiveddate": "2017-10-10",
  "rampdown": "NO",
  "remarks": "Billing starts after associates onboarding",
  "assignee": "DEEPALI PRAMOD BELSARE",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "26",
  "customerdept": "NETACAD",
  "clientmanager": "Parminder",
  "billing_loss_days": null
}, {
  "demfcastid": "16",
  "creationdate": "2017-11-17",
  "createdby": "VM50780",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "VM_GIS_01",
  "opportunitydesc": "to replace Emma Babayan",
  "portfolio": null,
  "category": null,
  "emstaffid": "VIPUL  MEHTA",
  "odmstaffid": "",
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Scripting Languages",
  "primaryskillset": "Angular JS",
  "secondaryskillset": "Java / J2EE",
  "location": " San Jose",
  "numberofpositions": "1",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2017-10-30",
  "probability": "90",
  "demandstatus": "Open",
  "demandreceiveddate": "2017-10-11",
  "rampdown": "NO",
  "remarks": "NA",
  "assignee": "OM PRAKASH GAGRANI",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "90",
  "customerdept": "GIS",
  "clientmanager": "Monica ",
  "billing_loss_days": null
}, {
  "demfcastid": "17",
  "creationdate": "2018-12-24",
  "createdby": "NL27307",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "hs201",
  "opportunitydesc": "Java EE",
  "portfolio": null,
  "category": null,
  "emstaffid": "AMIT GROVER",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Java",
  "primaryskillset": "Spring",
  "secondaryskillset": "MongoDB",
  "location": " UK",
  "numberofpositions": "1",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2018-12-31",
  "probability": "70",
  "demandstatus": "Open",
  "demandreceiveddate": "2018-12-18",
  "rampdown": "NO",
  "remarks": "create demand",
  "assignee": "KARTHIKEYAN SELVAM",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "85",
  "customerdept": " CE",
  "clientmanager": "James",
  "billing_loss_days": null
}, {
  "demfcastid": "18",
  "creationdate": "2018-12-24",
  "createdby": "NL27307",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "SFDC 002",
  "opportunitydesc": "OPP 002",
  "portfolio": null,
  "category": null,
  "emstaffid": "VAMSHI NOOTHI",
  "odmstaffid": "",
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Doc Mgmt",
  "primaryskillset": "Alfresco",
  "secondaryskillset": "BOXI",
  "location": " San Jose",
  "numberofpositions": "2",
  "numberofpositionsfilled": "0.00",
  "billingstartdate": "2018-12-31",
  "probability": "65",
  "demandstatus": "Open",
  "demandreceiveddate": "2018-12-24",
  "rampdown": "NO",
  "remarks": "Medium Probability",
  "assignee": "NA",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "75",
  "customerdept": " PRODUCT MANAGEMENT",
  "clientmanager": "Cnt MGR",
  "billing_loss_days": null
}, {
  "demfcastid": "19",
  "creationdate": "2018-12-26",
  "createdby": "NL27307",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "VM_GIS_01",
  "opportunitydesc": "to replace Emma Babayan",
  "portfolio": null,
  "category": null,
  "emstaffid": "AMIT GROVER",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Java",
  "primaryskillset": "WebServices",
  "secondaryskillset": "Struts",
  "location": " San Jose",
  "numberofpositions": "1",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2018-12-31",
  "probability": "90",
  "demandstatus": "Open",
  "demandreceiveddate": "2018-12-24",
  "rampdown": "NO",
  "remarks": "NA",
  "assignee": "KARTHIKEYAN SELVAM",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "85",
  "customerdept": " GSQS",
  "clientmanager": "Monica",
  "billing_loss_days": null
}, {
  "demfcastid": "20",
  "creationdate": "2018-12-31",
  "createdby": "AG14445",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "AG_GSE_05",
  "opportunitydesc": "Replacement",
  "portfolio": null,
  "category": null,
  "emstaffid": "AMIT GROVER",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Java",
  "primaryskillset": "Java / J2EE",
  "secondaryskillset": "Adv PL /SQL",
  "location": " San Jose",
  "numberofpositions": "1",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2019-03-04",
  "probability": "90",
  "demandstatus": "Open",
  "demandreceiveddate": "2018-12-28",
  "rampdown": "NO",
  "remarks": "NA",
  "assignee": "KARTHIKEYAN SELVAM",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "85",
  "customerdept": " GSQS",
  "clientmanager": "Neerka",
  "billing_loss_days": null
}, {
  "demfcastid": "21",
  "creationdate": "2018-12-31",
  "createdby": "AG14445",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "AG_GSE_06",
  "opportunitydesc": "Replacement",
  "portfolio": null,
  "category": null,
  "emstaffid": "AMIT GROVER",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Java",
  "primaryskillset": "Java / J2EE",
  "secondaryskillset": "Adv PL /SQL",
  "location": " San Jose",
  "numberofpositions": "1",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2019-02-18",
  "probability": "90",
  "demandstatus": "Open",
  "demandreceiveddate": "2018-12-31",
  "rampdown": "NO",
  "remarks": "NA",
  "assignee": "KARTHIKEYAN SELVAM",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "85",
  "customerdept": " GSQS",
  "clientmanager": "Shankar",
  "billing_loss_days": null
}, {
  "demfcastid": "22",
  "creationdate": "2019-01-04",
  "createdby": "NL27307",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "Dem20",
  "opportunitydesc": "Opp20",
  "portfolio": null,
  "category": null,
  "emstaffid": "AMIT GROVER",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " Java",
  "primaryskillset": "Java / J2EE",
  "secondaryskillset": "Database - Oracle DB",
  "location": " San Jose",
  "numberofpositions": "2",
  "numberofpositionsfilled": "100.00",
  "billingstartdate": "2019-01-28",
  "probability": "80",
  "demandstatus": "Open",
  "demandreceiveddate": "2018-12-24",
  "rampdown": "NO",
  "remarks": "High Probability",
  "assignee": "KARTHIKEYAN SELVAM",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": "75",
  "customerdept": " PRODUCT MANAGEMENT",
  "clientmanager": "Cnt MGR",
  "billing_loss_days": null
}, {
  "demfcastid": "27",
  "creationdate": "2019-02-07",
  "createdby": "AG14445",
  "lastupdationdate": null,
  "lastupdatedby": null,
  "opportunityidsfdc": "1111",
  "opportunitydesc": "Desc",
  "portfolio": null,
  "category": null,
  "emstaffid": "AMIT GROVER",
  "odmstaffid": null,
  "dhstaffid": "SANDEEP S DESHMUKH",
  "pgmstaffid": "GIRISH KUMAR PUROHIT",
  "skillfamily": " MS Office",
  "primaryskillset": "VBA/EXCEL",
  "secondaryskillset": "Hibernate",
  "location": " Pune",
  "numberofpositions": "5",
  "numberofpositionsfilled": "0.00",
  "billingstartdate": "2019-02-28",
  "probability": "90",
  "demandstatus": "Open",
  "demandreceiveddate": "2019-02-01",
  "rampdown": "NO",
  "remarks": "Pre Release",
  "assignee": "GIRISH KUMAR PUROHIT",
  "odch": "AVINASH PANDURANG KALE",
  "billingloss": null,
  "billingrate": null,
  "customerdept": " Q2O",
  "clientmanager": "CM",
  "billing_loss_days": null
}]
  private columnDefs;
  private columnDefsBkp;
  private columnDropDown;
  private rowData;
  public empRole: string;
  public empNumber: string;
  public listData9: any;
  public listDataBkp: any;
  private selectAllFlag: boolean = true;
  private showFilter:boolean = false;
  userData: any;
  constructor(private api: ApiService, private _data: commonService) {
    this.columnDefs = [
      {
        headerName: "Demand ID",
        field: "demfcastid",
        width: 100,
        cellRenderer: "agGroupCellRenderer"
      },
      {
        headerName: "Opportunity Id",
        field: "opportunityidsfdc",
        width: 100
      },
      {
        headerName: "Opportunity Desc",
        field: "opportunitydesc",
        width: 100
      },
      {
        headerName: "Client Manager",
        field: "clientmanager",
        width: 200
      }, {
        headerName: "Customer Dept/Program",
        field: "customerdept",
        width: 100
      }, {
        headerName: "Assigned To",
        field: "assignee",
        width: 200
      },
      {
        headerName: "Created By(EM)",
        field: "emstaffid",
        width: 100
      },
      {
        headerName: "Created On",
        field: "creationdate",
        width: 100
      },
      {
        headerName: "Offshore Delivery Center Head",
        field: "odch",
        width: 100
      },
      {
        headerName: "Engagement Manager",
        field: "emstaffid",
        width: 100
      },
      {
        headerName: "Onsite Delivery Head",
        field: "odmstaffid",
        width: 100
      },
      {
        headerName: "Delivery Head",
        field: "dhstaffid",
        width: 100
      },
      {
        headerName: "Program Manager",
        field: "pgmstaffid",
        width: 100
      },
      {
        headerName: "Skill Family",
        field: "skillfamily",
        width: 100
      },
      {
        headerName: "Primary Skill",
        field: "primaryskillset",
        width: 100
      },
      {
        headerName: "Secondary Skill",
        field: "secondaryskillset",
        width: 100
      },
      {
        headerName: "Location",
        field: "location",
        width: 100
      },
      {
        headerName: "Date Demand Received",
        field: "demandreceiveddate",
        width: 100
      },
      {
        headerName: "Ramp Down(Yes/No)",
        field: "rampdown",
        width: 100
      },
      {
        headerName: "Demand Status",
        field: "demandstatus",
        width: 100
      },
      {
        headerName: "Remark",
        field: "remarks",
        width: 100
      },
      {
        headerName: "Probability (in %)",
        field: "probability",
        width: 100
      },
      {
        headerName: "No of Position",
        field: "numberofpositions",
        width: 100
      },
      {
        headerName: "Total Billing loss(in $)",
        field: "billing_loss_days",
        width: 100
      },
      {
        headerName: "Total Billing loss(in Days)",
        field: "billing_loss_days",
        width: 100
      },
      {
        headerName: "Billing Rate",
        field: "billingrate",
        width: 100
      },
      {
        headerName: "Fulfilled Status",
        field: "numberofpositionsfilled",
        width: 100
      },
      {
        headerName: "Billing Start Date",
        field: "billingstartdate",
        width: 100
      }
    ];
    /*this.rowData = [
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      },
      {
        "demand_id": "17",
        "opportunity_id": "hs201",
        "opportunity_desc": "Java EE",
        "client_manager": "James",
        "customer_dept": "CE",
        "assigned_to": "KARTHIKEYAN SELVAM	",
        "created_by": "AMIT GROVER",
        "created_on": "2018-12-24	",
        "offshore_delivery_CH": "AVINASH PANDURANG KALE",
        "eng_manager": "AMIT GROVER",
        "onsite_delivery_head": "",
        "delivery_head": "SANDEEP S DESHMUKH",
        "program_manager": "GIRISH KUMAR PUROHIT",
        "skill_family": "Java",
        "primary_skill": "Spring",
        "secondary_skill": "MongoDB",
        "location": "UK",
        "date_demand_received": "2018-12-18",
        "ramp_down": "NO",
        "demand_status": "Open",
        "remark": "Created Demand",
        "probability": "70",
        "no_of_position": "1",
        "total_billing_loss_$": "",
        "total_billing_loss_days": "",
        "billing_rate": "85",
        "fulfilled_status": "100.00",
        "Billing Start Date": "2018-12-31",

      }
    ]*/

  }

  ngOnInit() {
    this._data.currentData.subscribe(
      currentData => {
        this.userData = currentData
      }
    )
    // Api call to get Demand list data
    // this.getDemandListData();

    this.columnDropDown = _.cloneDeep(this.columnDefs);
    this.columnDefsBkp = _.cloneDeep(this.columnDefs);
    //By default select all columns
    this.columnDropDown.forEach(col => {
      col.selected = true;
    });

    this.listData9 = [
      {
      "demfcastid": "6",
      "creationdate": "2017-08-11",
      "createdby": "gaverma",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "GV_GP_01",
      "opportunitydesc": "NetACAD",
      "portfolio": " GSE",
      "category": "NETACAD ACADEMY",
      "emstaffid": "GAURAV P VERMA",
      "odmstaffid": "Amit Grover",
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Scripting Languages",
      "primaryskillset": "PHP",
      "secondaryskillset": "PHP",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2017-11-01",
      "probability": "80",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-07-24",
      "rampdown": "NO",
      "remarks": "Netacad,Nextgen,austin",
      "assignee": "GIRISH KUMAR PUROHIT",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": null,
      "customerdept": null,
      "clientmanager": null,
      "billing_loss_days": null,
      "children": [{
        "demfcastid": "6 Second Level",
        "creationdate": " Second Level 2017-08-11",
        "createdby": "Second Levelgaverma",
        "lastupdationdate": null,
        "lastupdatedby": null,
        "opportunityidsfdc": "GV_GP_01",
        "opportunitydesc": "NetACAD",
        "portfolio": " GSE",
        "category": "NETACAD ACADEMY",
        "emstaffid": "GAURAV P VERMA",
        "odmstaffid": "Amit Grover",
        "dhstaffid": "SANDEEP S DESHMUKH",
        "pgmstaffid": "GIRISH KUMAR PUROHIT",
        "skillfamily": " Scripting Languages",
        "primaryskillset": "PHP",
        "secondaryskillset": "PHP",
        "location": " San Jose",
        "numberofpositions": "1",
        "numberofpositionsfilled": "100.00",
        "billingstartdate": "2017-11-01",
        "probability": "80",
        "demandstatus": "Open",
        "demandreceiveddate": "2017-07-24",
        "rampdown": "NO",
        "remarks": "Netacad,Nextgen,austin",
        "assignee": "GIRISH KUMAR PUROHIT",
        "odch": "AVINASH PANDURANG KALE",
        "billingloss": null,
        "billingrate": null,
        "customerdept": null,
        "clientmanager": null,
        "billing_loss_days": null,
        "children": [{
          "demfcastid": "6 Third Level",
          "creationdate": " Third Level 2017-08-11",
          "createdby": "Third Levelgaverma",
          "lastupdationdate": null,
          "lastupdatedby": null,
          "opportunityidsfdc": "GV_GP_01",
          "opportunitydesc": "NetACAD",
          "portfolio": " GSE",
          "category": "NETACAD ACADEMY",
          "emstaffid": "GAURAV P VERMA",
          "odmstaffid": "Amit Grover",
          "dhstaffid": "SANDEEP S DESHMUKH",
          "pgmstaffid": "GIRISH KUMAR PUROHIT",
          "skillfamily": " Scripting Languages",
          "primaryskillset": "PHP",
          "secondaryskillset": "PHP",
          "location": " San Jose",
          "numberofpositions": "1",
          "numberofpositionsfilled": "100.00",
          "billingstartdate": "2017-11-01",
          "probability": "80",
          "demandstatus": "Open",
          "demandreceiveddate": "2017-07-24",
          "rampdown": "NO",
          "remarks": "Netacad,Nextgen,austin",
          "assignee": "GIRISH KUMAR PUROHIT",
          "odch": "AVINASH PANDURANG KALE",
          "billingloss": null,
          "billingrate": null,
          "customerdept": null,
          "clientmanager": null,
          "billing_loss_days": null
        }]
      }]
    }, {
      "demfcastid": "8",
      "creationdate": "2017-08-11",
      "createdby": "gaverma",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "GV_GP_02",
      "opportunitydesc": "NetACAD",
      "portfolio": " GSE",
      "category": "NETACAD ACADEMY",
      "emstaffid": "GAURAV P VERMA",
      "odmstaffid": "Amit Grover",
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Scripting Languages",
      "primaryskillset": "PHP",
      "secondaryskillset": "PHP",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "0.00",
      "billingstartdate": "2017-11-01",
      "probability": "50",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-07-24",
      "rampdown": "NO",
      "remarks": "Netacad,Nextgen,austin",
      "assignee": "NA",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": null,
      "customerdept": null,
      "clientmanager": null,
      "billing_loss_days": null
    }, {
      "demfcastid": "13",
      "creationdate": "2017-11-17",
      "createdby": "GV21783",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "GV_GP_03",
      "opportunitydesc": "NetACAD)Testing",
      "portfolio": null,
      "category": null,
      "emstaffid": "GAURAV P VERMA",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Oracle",
      "primaryskillset": "PL/SQL",
      "secondaryskillset": "HTML",
      "location": " Pune",
      "numberofpositions": "2",
      "numberofpositionsfilled": "50.00",
      "billingstartdate": "2017-10-30",
      "probability": "80",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-10-27",
      "rampdown": "NO",
      "remarks": "Billing starts after associates onboarding",
      "assignee": "DEEPALI PRAMOD BELSARE",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "23",
      "customerdept": "NETACAD",
      "clientmanager": "Parminder",
      "billing_loss_days": null
    }, {
      "demfcastid": "14",
      "creationdate": "2017-11-17",
      "createdby": "GV21783",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "GV_GP_04",
      "opportunitydesc": "NetACAD-Docker-Lead Expert",
      "portfolio": null,
      "category": null,
      "emstaffid": "GAURAV P VERMA",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Platform and server administration",
      "primaryskillset": "AWS",
      "secondaryskillset": "Unix/Linux",
      "location": " Pune",
      "numberofpositions": "1",
      "numberofpositionsfilled": "0.00",
      "billingstartdate": "2017-10-17",
      "probability": "80",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-10-10",
      "rampdown": "NO",
      "remarks": "Billing starts after associates onboarding",
      "assignee": "DEEPALI PRAMOD BELSARE",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "26",
      "customerdept": "NETACAD",
      "clientmanager": "Parminder",
      "billing_loss_days": null
    }, {
      "demfcastid": "15",
      "creationdate": "2017-11-17",
      "createdby": "GV21783",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "GV_GP_05",
      "opportunitydesc": "NetACAD-Docker-Expert",
      "portfolio": null,
      "category": null,
      "emstaffid": "GAURAV P VERMA",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Platform and server administration",
      "primaryskillset": "AWS",
      "secondaryskillset": "Unix/Linux",
      "location": " Pune",
      "numberofpositions": "1",
      "numberofpositionsfilled": "0.00",
      "billingstartdate": "2017-10-17",
      "probability": "80",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-10-10",
      "rampdown": "NO",
      "remarks": "Billing starts after associates onboarding",
      "assignee": "DEEPALI PRAMOD BELSARE",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "26",
      "customerdept": "NETACAD",
      "clientmanager": "Parminder",
      "billing_loss_days": null
    }, {
      "demfcastid": "16",
      "creationdate": "2017-11-17",
      "createdby": "VM50780",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "VM_GIS_01",
      "opportunitydesc": "to replace Emma Babayan",
      "portfolio": null,
      "category": null,
      "emstaffid": "VIPUL  MEHTA",
      "odmstaffid": "",
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Scripting Languages",
      "primaryskillset": "Angular JS",
      "secondaryskillset": "Java / J2EE",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2017-10-30",
      "probability": "90",
      "demandstatus": "Open",
      "demandreceiveddate": "2017-10-11",
      "rampdown": "NO",
      "remarks": "NA",
      "assignee": "OM PRAKASH GAGRANI",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "90",
      "customerdept": "GIS",
      "clientmanager": "Monica ",
      "billing_loss_days": null
    }, {
      "demfcastid": "17",
      "creationdate": "2018-12-24",
      "createdby": "NL27307",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "hs201",
      "opportunitydesc": "Java EE",
      "portfolio": null,
      "category": null,
      "emstaffid": "AMIT GROVER",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Java",
      "primaryskillset": "Spring",
      "secondaryskillset": "MongoDB",
      "location": " UK",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2018-12-31",
      "probability": "70",
      "demandstatus": "Open",
      "demandreceiveddate": "2018-12-18",
      "rampdown": "NO",
      "remarks": "create demand",
      "assignee": "KARTHIKEYAN SELVAM",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "85",
      "customerdept": " CE",
      "clientmanager": "James",
      "billing_loss_days": null
    }, {
      "demfcastid": "18",
      "creationdate": "2018-12-24",
      "createdby": "NL27307",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "SFDC 002",
      "opportunitydesc": "OPP 002",
      "portfolio": null,
      "category": null,
      "emstaffid": "VAMSHI NOOTHI",
      "odmstaffid": "",
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Doc Mgmt",
      "primaryskillset": "Alfresco",
      "secondaryskillset": "BOXI",
      "location": " San Jose",
      "numberofpositions": "2",
      "numberofpositionsfilled": "0.00",
      "billingstartdate": "2018-12-31",
      "probability": "65",
      "demandstatus": "Open",
      "demandreceiveddate": "2018-12-24",
      "rampdown": "NO",
      "remarks": "Medium Probability",
      "assignee": "NA",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "75",
      "customerdept": " PRODUCT MANAGEMENT",
      "clientmanager": "Cnt MGR",
      "billing_loss_days": null
    }, {
      "demfcastid": "19",
      "creationdate": "2018-12-26",
      "createdby": "NL27307",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "VM_GIS_01",
      "opportunitydesc": "to replace Emma Babayan",
      "portfolio": null,
      "category": null,
      "emstaffid": "AMIT GROVER",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Java",
      "primaryskillset": "WebServices",
      "secondaryskillset": "Struts",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2018-12-31",
      "probability": "90",
      "demandstatus": "Open",
      "demandreceiveddate": "2018-12-24",
      "rampdown": "NO",
      "remarks": "NA",
      "assignee": "KARTHIKEYAN SELVAM",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "85",
      "customerdept": " GSQS",
      "clientmanager": "Monica",
      "billing_loss_days": null
    }, {
      "demfcastid": "20",
      "creationdate": "2018-12-31",
      "createdby": "AG14445",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "AG_GSE_05",
      "opportunitydesc": "Replacement",
      "portfolio": null,
      "category": null,
      "emstaffid": "AMIT GROVER",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Java",
      "primaryskillset": "Java / J2EE",
      "secondaryskillset": "Adv PL /SQL",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2019-03-04",
      "probability": "90",
      "demandstatus": "Open",
      "demandreceiveddate": "2018-12-28",
      "rampdown": "NO",
      "remarks": "NA",
      "assignee": "KARTHIKEYAN SELVAM",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "85",
      "customerdept": " GSQS",
      "clientmanager": "Neerka",
      "billing_loss_days": null
    }, {
      "demfcastid": "21",
      "creationdate": "2018-12-31",
      "createdby": "AG14445",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "AG_GSE_06",
      "opportunitydesc": "Replacement",
      "portfolio": null,
      "category": null,
      "emstaffid": "AMIT GROVER",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Java",
      "primaryskillset": "Java / J2EE",
      "secondaryskillset": "Adv PL /SQL",
      "location": " San Jose",
      "numberofpositions": "1",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2019-02-18",
      "probability": "90",
      "demandstatus": "Open",
      "demandreceiveddate": "2018-12-31",
      "rampdown": "NO",
      "remarks": "NA",
      "assignee": "KARTHIKEYAN SELVAM",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "85",
      "customerdept": " GSQS",
      "clientmanager": "Shankar",
      "billing_loss_days": null
    }, {
      "demfcastid": "22",
      "creationdate": "2019-01-04",
      "createdby": "NL27307",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "Dem20",
      "opportunitydesc": "Opp20",
      "portfolio": null,
      "category": null,
      "emstaffid": "AMIT GROVER",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " Java",
      "primaryskillset": "Java / J2EE",
      "secondaryskillset": "Database - Oracle DB",
      "location": " San Jose",
      "numberofpositions": "2",
      "numberofpositionsfilled": "100.00",
      "billingstartdate": "2019-01-28",
      "probability": "80",
      "demandstatus": "Open",
      "demandreceiveddate": "2018-12-24",
      "rampdown": "NO",
      "remarks": "High Probability",
      "assignee": "KARTHIKEYAN SELVAM",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": "75",
      "customerdept": " PRODUCT MANAGEMENT",
      "clientmanager": "Cnt MGR",
      "billing_loss_days": null
    }, {
      "demfcastid": "27",
      "creationdate": "2019-02-07",
      "createdby": "AG14445",
      "lastupdationdate": null,
      "lastupdatedby": null,
      "opportunityidsfdc": "1111",
      "opportunitydesc": "Desc",
      "portfolio": null,
      "category": null,
      "emstaffid": "AMIT GROVER",
      "odmstaffid": null,
      "dhstaffid": "SANDEEP S DESHMUKH",
      "pgmstaffid": "GIRISH KUMAR PUROHIT",
      "skillfamily": " MS Office",
      "primaryskillset": "VBA/EXCEL",
      "secondaryskillset": "Hibernate",
      "location": " Pune",
      "numberofpositions": "5",
      "numberofpositionsfilled": "0.00",
      "billingstartdate": "2019-02-28",
      "probability": "90",
      "demandstatus": "Open",
      "demandreceiveddate": "2019-02-01",
      "rampdown": "NO",
      "remarks": "Pre Release",
      "assignee": "GIRISH KUMAR PUROHIT",
      "odch": "AVINASH PANDURANG KALE",
      "billingloss": null,
      "billingrate": null,
      "customerdept": " Q2O",
      "clientmanager": "CM",
      "billing_loss_days": null
    }]
    this.listData9.filter(item => {
      item.active = false;
      if (item["children"] != undefined) {
        item.children.filter(subItem => {
          subItem.active = false;
        })
      }
    });

    this.listDataBkp = _.cloneDeep(this.listData);
  }



  getDemandListData() {
    this.empRole = this.userData.role;
    this.empNumber = this.userData.staffNo;
    this.api.demandList('', this.empNumber, this.empRole)
      .then((response: any) => {
        console.log(response);
        // this.demandListResponse = JSON.parse(response.data);
        // console.log('Demand List Response -> ', this.demandListResponse)
        
        this.listData = response.matrixEmpDetails;


      })
      .catch((error) => {
        console.log(error)
        // Dismiss the loader
        //  this.dismissLoader();
        // Show alert with error message
        //  this.showAlert(Constants.ERROR_TITLE, Constants.ERROR_MESSAGE);
      })
  }

  showMinorData(i: any) {
    this.listData9[i].active = !this.listData9[i].active;
  }

  showSubMinorData(i:any,j: any) {
    this.listData9[i].children[j].active = !this.listData9[i].children[j].active;
  }

  changeAllSelection(event){
    const checked = event.target.checked;
    this.selectAllFlag = checked;
    this.columnDropDown.forEach(col => {
      col.selected = checked;
    });
  }

  changeColSelection(headerName, event){
    
    const checked = event.target.checked;
    this.columnDropDown.find(col => col.headerName == headerName).selected = checked;
    this.checkIfAllColSelected();
  }
  
  checkIfAllColSelected(){
    let colData = this.columnDropDown.find(col => col.selected == false);
    if(colData == undefined){
      this.selectAllFlag = true;  
    } else {
      this.selectAllFlag = false;
    }
  }

  applyFilter(){
    if(this.selectAllFlag){
      //reset columns and data on all select
      this.columnDefs = _.cloneDeep(this.columnDefsBkp);
      this.listData = _.cloneDeep(this.listDataBkp);
    } else{
      let removedCols = _.filter(this.columnDropDown, {'selected': false});

      //Atleast 3 columns must be selected
      if(removedCols.length <= this.columnDropDown.length - 3){
        //reset columns and data on all select
        this.columnDefs = _.cloneDeep(this.columnDefsBkp);
        this.listData = _.cloneDeep(this.listDataBkp);

        removedCols.forEach(col => {
          _.remove(this.columnDefs, {'headerName': col.headerName});
          this.listData.forEach(listCol => {
            if(listCol.hasOwnProperty(col.field)){
              delete listCol[col.field];
            }
  
            if(listCol.hasOwnProperty('children')){
              this.deleteFromChildrenArray(listCol['children'], col.field);
            }
          });
        });
       // this.showFilter = false;
      } else{
        alert('Atleast 3 columns must be selected!')
      }
    }
  }

  deleteFromChildrenArray(childrenArray, colName) {
    childrenArray.forEach(childElement => {
      if(childElement.hasOwnProperty(colName)){
        delete childrenArray[colName]
      }
      
      if(childElement.hasOwnProperty('children')){
        this.deleteFromChildrenArray(childElement['children'], colName);
      }
    });
  }

  showFilterContainer(){
    this.showFilter = !this.showFilter;
  }
}
