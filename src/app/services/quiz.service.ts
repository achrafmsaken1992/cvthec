import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class QuizService {

  jwtToken: string;

  constructor(public http: HttpClient) {
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  addQuiz(qcm){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/addQcm',qcm,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getQuizs(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/getQcmsByOffre?id="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  deleteQuiz(id){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/deleteQuiz',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  updateQuiz(quiz){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/updateQuiz',quiz,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  addQuestion(question){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/addQuestion',question,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getQuestions(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/getQuestionsByQcm?id="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  deleteQuestion(id){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/deleteQuestion',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  updateQuestion(question){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/updateQuestion',question,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  addSuggestion(suggestion){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/addSuggestion',suggestion,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getSuggestions(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/getSuggestionsByQuestion?id="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  deleteSuggestion(id){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/deleteSuggestion',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  updateSuggestion(suggestion){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/manager/updateSuggestion',suggestion,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getQuestionsCandidat(page,id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/getQuestions?page="+page+ "&qcm=" + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  getSuggestionReponse(id,reponse){
  if(this.jwtToken==null) this.loadToken();
  return    this.http.get<any>("http://localhost:8080/getSuggestionReponse?question="+id+ "&reponse=" + reponse,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

}
}
