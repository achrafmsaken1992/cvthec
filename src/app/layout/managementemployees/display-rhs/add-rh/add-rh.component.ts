import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {EmployeesService} from "../../../../services/employees.service";
@Component({
  selector: 'app-add-rh',
  templateUrl: './add-rh.component.html',
  styleUrls: ['./add-rh.component.scss']
})
export class AddRhComponent implements OnInit {

  constructor(private serviceEmployee:EmployeesService) { }

  ngOnInit() {
  }
    registerRh(fo){
        if(fo.valid){
            Swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then((result) => {
                if (result.value) {

                    this.serviceEmployee.registerRh(fo.value).subscribe(resp=>{

                        fo.reset();
                    },err=>{
                        Swal(
                            'Erreur!',
                            err.error.message,
                            'error'
                        )
                    })

                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })





        }}


}
