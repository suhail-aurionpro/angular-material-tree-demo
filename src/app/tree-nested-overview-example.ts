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
        name: 'Setup 1',
        icon: 'manage_accounts',
        menu: [
          {
            name: 'Setup 1.1',
            menu: [{ name: 'Setup 1.1.1' }, { name: 'Setup 1.1.2' }]
          },
          {
            name: 'Setup 2.1',
            menu: [{ name: 'Setup 2.1.1' }, { name: 'Setup 2.1.2' }]
          }
        ]
      },
      {
        name: 'Templates',
        icon: 'description',
        menu: [
          {
            name: 'Template 1.1',
            menu: [{ name: 'Template 1.1.1' }, { name: 'Template 1.1.2' }]
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
