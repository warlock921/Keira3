import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MysqlQueryService } from '@keira-shared/services/mysql-query.service';
import { MockedMysqlQueryService, MockedToastrService } from '@keira-testing/mocks';
import { ToastrService } from 'ngx-toastr';
import { instance } from 'ts-mockito';
import { QuestHandlerService } from '../quest-handler.service';
import { GameobjectQuestenderService } from './gameobject-questender.service';

describe('GameobjectQuestenderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: MysqlQueryService, useValue: instance(MockedMysqlQueryService) },
        { provide: ToastrService, useValue: instance(MockedToastrService) },
        QuestHandlerService,
        GameobjectQuestenderService,
      ],
    }),
  );

  it('should be created', () => {
    const service: GameobjectQuestenderService = TestBed.inject(GameobjectQuestenderService);
    expect(service).toBeTruthy();
  });
});
