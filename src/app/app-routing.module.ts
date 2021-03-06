import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'news', component: NewsComponent  },
  { path: 'knowledge', component: KnowledgeComponent  },
  { path: 'contact', component: ContactComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
