import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/quesiton'
import { QuestionGenerationService } from '../question-generation.service';
import { questionGenerationRequest } from '../_models/questionGenerationRequest';

@Component({
  selector: 'app-question-generation',
  templateUrl: './question-generation.component.html',
  // styleUrls: ['./question-generation.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
  styleUrls: ['./question-generation.component.css', '../_themes/minty-bootstrap.min.css']
})
export class QuestionGenerationComponent implements OnInit {

  questions: Question[] = [];
  isLoading = false;
  constructor(private questionGenerationService: QuestionGenerationService) { }

  ngOnInit() {
    // this.getHeroes();
  }

  // getQuestions(): void {
  //   this.questionGenerationService.getQuestions()
  //   .subscribe(questions => this.questions = questions);
  // }

  generate(context: string, n_ques: string, n_mcq: string): void {

    if (!context) { return; }

    let req = new questionGenerationRequest()
    req.context = context.trim()
    req.n_ques = Number(n_ques)
    req.n_mcq = Number(n_mcq)

    this.questions = []
    this.isLoading = true;
    this.questionGenerationService.generate(req)
      .subscribe(questions => {
        this.isLoading = false;
        questions = questions.questions
        this.questions = []
        for (let i = 0; i < questions.length; i++) {
          const questionJson = questions[i];
          this.questions.push(JSON.parse(JSON.stringify(questionJson)))
        }
        this.prepareQuestions()
      });
  }
  prepareQuestions() {
    this.questions.forEach(q => {
      if (q.mcq.length == 0) {
        q.mcq.push(q.answer)
      }
    });
  }
  checkAnswer(quesiton: Question, answer: string) {
    return quesiton.answer == answer
  }
}
