import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface MegaMenu {
  name: string;
  icon?: string;
  menu?: MegaMenu[];
}

const TREE_DATA: MegaMenu[] = [
  {
    name: 'Setup',
    icon: 'settings',
    menu: [
      {
        name: 'General Master',
        icon: 'manage_accounts',
        menu: [
          {
            name: 'Currency',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          },
          {
            name: 'Geography',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          }
        ]
      },
      {
        name: 'Templates',
        icon: 'description',
        menu: [
          { name: 'Alert', menu: [{ name: 'Initiate' }, { name: 'Listing' }] },
          {
            name: 'Document Designer',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          }
        ]
      }
    ]
  },
  {
    name: 'RMS',
    icon: 'find_replace',
    menu: [
      {
        name: 'Corporate Masters',
        icon: 'corporate_fare',
        menu: [
          {
            name: 'Corporate Client',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          }
        ]
      },
      {
        name: 'Transactions',
        icon: 'paid',
        menu: [
          {
            name: 'Invoice Entry',
            icon: 'receipt_long',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          },
          {
            name: 'Manual Reconciliation',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          },
          {
            name: 'Undo Reconciliation',
            menu: [{ name: 'Initiate' }, { name: 'Listing' }]
          }
        ]
      }
    ]
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'tree-nested-overview-example',
  templateUrl: 'tree-nested-overview-example.html',
  styleUrls: ['tree-nested-overview-example.css']
})
export class TreeNestedOverviewExample {
  treeControl = new NestedTreeControl<MegaMenu>(node => node.menu);
  dataSource = new MatTreeNestedDataSource<MegaMenu>();
  isShowing = true;

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.treeControl.collapseAll();
  }

  hasChild = (_: number, node: MegaMenu) => !!node.menu && node.menu.length > 0;

  handleClick(name: string) {
    alert(name);
    this.treeControl.collapseAll();
  }
}
