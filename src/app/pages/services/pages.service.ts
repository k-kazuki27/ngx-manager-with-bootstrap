import { Injectable } from '@angular/core'

import { PagesResolverModule } from './pages-resolver.module'

@Injectable({
  providedIn: PagesResolverModule
})
export class PagesService {
  constructor() {}
}
