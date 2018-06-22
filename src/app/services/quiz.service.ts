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
  getQuizsManager(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/getQcmsByOffreManager?id="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

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
  addReponse(reponse){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080//etudiant/addReponse',reponse,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  addNote(note){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post('http://localhost:8080/etudiant/addNote',note,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  findNoteByqcmByetudiant(etudiantId,qcmId){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/findNoteByqcmByetudiant?etudiant="+etudiantId+ "&qcm=" + qcmId,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }

  nbrParticipantsQcm(qcmId){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/nbrParticipantsQcm?qcm=" + qcmId,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  moyenneNoteQcm(qcmId){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/moyenneNoteQcm?qcm=" + qcmId,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  meuilleurNoteQcm(qcmId){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/meuilleurNoteQcm?qcm=" + qcmId,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  plusMauvaisNoteQcm(qcmId){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/plusMauvaisNoteQcm?qcm=" + qcmId,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  findNoteByqcm(qcmId,page){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/findNoteByqcm?qcm="+qcmId+ "&page=" + page,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
findQuizById(id){
  if(this.jwtToken==null) this.loadToken();
  return    this.http.get<any>("http://localhost:8080/findQuizById?qcm="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

}
  nbrParticipantsReussisQcm(qcmId){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/nbrParticipantsReussisQcm?qcm=" + qcmId,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  nbrQuestionsByQuiz(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/nbrQuestionsByQcm?id=" + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  nbrSuggestionByQuestion(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/nbrSuggestionByQuestion?id=" + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
nbrQuizsOffre(id){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<number>("http://localhost:8080/nbrQuizsOffre?id=" + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  nbrRepCorrect(){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<number>("http://localhost:8080/admin/nbrRepCorrect" ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  nbrRepFausse(){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<number>("http://localhost:8080/admin/nbrRepFausse" ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
 nbrMoyenne(){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<number>("http://localhost:8080/admin/nbrMoyenne" ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }
  nbrRed(){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<number>("http://localhost:8080/admin/nbrRed" ,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }





}
