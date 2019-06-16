'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-manager-with-bootstrap documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApiModule-51aac97e76a9a513a7bedcd5a1ec8d0b"' : 'data-target="#xs-injectables-links-module-ApiModule-51aac97e76a9a513a7bedcd5a1ec8d0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiModule-51aac97e76a9a513a7bedcd5a1ec8d0b"' :
                                        'id="xs-injectables-links-module-ApiModule-51aac97e76a9a513a7bedcd5a1ec8d0b"' }>
                                        <li class="link">
                                            <a href="injectables/LoginApi.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginApi</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserApi.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserApi</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-46ca6ce586538fb67fcf5f4e8b2cc20e"' : 'data-target="#xs-components-links-module-AppModule-46ca6ce586538fb67fcf5f4e8b2cc20e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-46ca6ce586538fb67fcf5f4e8b2cc20e"' :
                                            'id="xs-components-links-module-AppModule-46ca6ce586538fb67fcf5f4e8b2cc20e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BsComponentModule.html" data-type="entity-link">BsComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BsComponentModule-6dc5dcbb25fb8bac920023e2581b747e"' : 'data-target="#xs-components-links-module-BsComponentModule-6dc5dcbb25fb8bac920023e2581b747e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BsComponentModule-6dc5dcbb25fb8bac920023e2581b747e"' :
                                            'id="xs-components-links-module-BsComponentModule-6dc5dcbb25fb8bac920023e2581b747e"' }>
                                            <li class="link">
                                                <a href="components/BsComponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BsComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BsComponentRoutingModule.html" data-type="entity-link">BsComponentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmModule.html" data-type="entity-link">ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' : 'data-target="#xs-components-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' :
                                            'id="xs-components-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' }>
                                            <li class="link">
                                                <a href="components/ConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' : 'data-target="#xs-injectables-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' :
                                        'id="xs-injectables-links-module-ConfirmModule-bfaba057effbde69347762f3f89b720d"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfirmService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomPaginationModule.html" data-type="entity-link">CustomPaginationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomPaginationModule-7e39520916138c32712513dc0195ac5a"' : 'data-target="#xs-components-links-module-CustomPaginationModule-7e39520916138c32712513dc0195ac5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomPaginationModule-7e39520916138c32712513dc0195ac5a"' :
                                            'id="xs-components-links-module-CustomPaginationModule-7e39520916138c32712513dc0195ac5a"' }>
                                            <li class="link">
                                                <a href="components/CustomPaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomPaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DateInputModule.html" data-type="entity-link">DateInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DateInputModule-d02a0420b4e4adbf8689530a776353ea"' : 'data-target="#xs-components-links-module-DateInputModule-d02a0420b4e4adbf8689530a776353ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DateInputModule-d02a0420b4e4adbf8689530a776353ea"' :
                                            'id="xs-components-links-module-DateInputModule-d02a0420b4e4adbf8689530a776353ea"' }>
                                            <li class="link">
                                                <a href="components/DateInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DropdownPageLinesModule.html" data-type="entity-link">DropdownPageLinesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DropdownPageLinesModule-60304fa4a98b90f3003c079fbcdcec3f"' : 'data-target="#xs-components-links-module-DropdownPageLinesModule-60304fa4a98b90f3003c079fbcdcec3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DropdownPageLinesModule-60304fa4a98b90f3003c079fbcdcec3f"' :
                                            'id="xs-components-links-module-DropdownPageLinesModule-60304fa4a98b90f3003c079fbcdcec3f"' }>
                                            <li class="link">
                                                <a href="components/DropdownPageLinesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownPageLinesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorLabelModule.html" data-type="entity-link">ErrorLabelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ErrorLabelModule-81708f311df4d945a4f6b3f64bb27829"' : 'data-target="#xs-components-links-module-ErrorLabelModule-81708f311df4d945a4f6b3f64bb27829"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorLabelModule-81708f311df4d945a4f6b3f64bb27829"' :
                                            'id="xs-components-links-module-ErrorLabelModule-81708f311df4d945a4f6b3f64bb27829"' }>
                                            <li class="link">
                                                <a href="components/ErrorLabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorLabelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-38f3d55f330440db2fcd570f7dc2268e"' : 'data-target="#xs-components-links-module-HomeModule-38f3d55f330440db2fcd570f7dc2268e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-38f3d55f330440db2fcd570f7dc2268e"' :
                                            'id="xs-components-links-module-HomeModule-38f3d55f330440db2fcd570f7dc2268e"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputDropdownModule.html" data-type="entity-link">InputDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputDropdownModule-22c3f41ee5c8e10eedd33e1c74c41476"' : 'data-target="#xs-components-links-module-InputDropdownModule-22c3f41ee5c8e10eedd33e1c74c41476"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputDropdownModule-22c3f41ee5c8e10eedd33e1c74c41476"' :
                                            'id="xs-components-links-module-InputDropdownModule-22c3f41ee5c8e10eedd33e1c74c41476"' }>
                                            <li class="link">
                                                <a href="components/InputDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-7a26109f6fdb138b64cf3f08b4536a3e"' : 'data-target="#xs-components-links-module-LoginModule-7a26109f6fdb138b64cf3f08b4536a3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-7a26109f6fdb138b64cf3f08b4536a3e"' :
                                            'id="xs-components-links-module-LoginModule-7a26109f6fdb138b64cf3f08b4536a3e"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageHeaderModule.html" data-type="entity-link">PageHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageHeaderModule-5ac4714acb9cc804eea615708d0a213a"' : 'data-target="#xs-components-links-module-PageHeaderModule-5ac4714acb9cc804eea615708d0a213a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageHeaderModule-5ac4714acb9cc804eea615708d0a213a"' :
                                            'id="xs-components-links-module-PageHeaderModule-5ac4714acb9cc804eea615708d0a213a"' }>
                                            <li class="link">
                                                <a href="components/PageHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-bfcba4b67d06debe41a9fd8937d26f39"' : 'data-target="#xs-components-links-module-PagesModule-bfcba4b67d06debe41a9fd8937d26f39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-bfcba4b67d06debe41a9fd8937d26f39"' :
                                            'id="xs-components-links-module-PagesModule-bfcba4b67d06debe41a9fd8937d26f39"' }>
                                            <li class="link">
                                                <a href="components/CollapseButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapseButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesResolverModule.html" data-type="entity-link">PagesResolverModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link">PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionTooltipModule.html" data-type="entity-link">QuestionTooltipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuestionTooltipModule-ddf57e713749445a84ff88afa7ffda7b"' : 'data-target="#xs-components-links-module-QuestionTooltipModule-ddf57e713749445a84ff88afa7ffda7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestionTooltipModule-ddf57e713749445a84ff88afa7ffda7b"' :
                                            'id="xs-components-links-module-QuestionTooltipModule-ddf57e713749445a84ff88afa7ffda7b"' }>
                                            <li class="link">
                                                <a href="components/QuestionTooltipComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestionTooltipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequiredModule.html" data-type="entity-link">RequiredModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RequiredModule-d0017a7a53920e550ac23d6bd4b0980c"' : 'data-target="#xs-components-links-module-RequiredModule-d0017a7a53920e550ac23d6bd4b0980c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequiredModule-d0017a7a53920e550ac23d6bd4b0980c"' :
                                            'id="xs-components-links-module-RequiredModule-d0017a7a53920e550ac23d6bd4b0980c"' }>
                                            <li class="link">
                                                <a href="components/RequiredComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequiredComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-cd72151a78d625f27b100aaab1025772"' : 'data-target="#xs-components-links-module-UserModule-cd72151a78d625f27b100aaab1025772"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-cd72151a78d625f27b100aaab1025772"' :
                                            'id="xs-components-links-module-UserModule-cd72151a78d625f27b100aaab1025772"' }>
                                            <li class="link">
                                                <a href="components/UserDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserResolverModule.html" data-type="entity-link">UserResolverModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link">UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractDetail.html" data-type="entity-link">AbstractDetail</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractList.html" data-type="entity-link">AbstractList</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplicationError.html" data-type="entity-link">ApplicationError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Configuration.html" data-type="entity-link">Configuration</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomHttpUrlEncodingCodec.html" data-type="entity-link">CustomHttpUrlEncodingCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserValidator.html" data-type="entity-link">UserValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomErrorHandlerService.html" data-type="entity-link">CustomErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginUserService.html" data-type="entity-link">LoginUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagesService.html" data-type="entity-link">PagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteHistoryService.html" data-type="entity-link">RouteHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link">StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/CustomInterceptorService.html" data-type="entity-link">CustomInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConfigurationParameters.html" data-type="entity-link">ConfigurationParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginDTO.html" data-type="entity-link">LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link">Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableHeader.html" data-type="entity-link">TableHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserDTO.html" data-type="entity-link">UserDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsersDTO.html" data-type="entity-link">UsersDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});