import React, { Component } from 'react';
import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Col from "reactstrap/lib/Col";
import FormFeedback from "reactstrap/lib/FormFeedback";

class Forms extends Component {
    constructor(props){
        super(props);

        this.state= {
            population: '',
            timeToElapse: '',
            reportedCases: '',
            totalHospitalBeds: '',
            periodType: '',
            touched: {
                population: false,
                timeToElapse: false,
                reportedCases: false,
                totalHospitalBeds: false,
                periodType: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(population,timeToElapse, reportedCases, totalHospitalBeds, periodType){
        const errors = {
            population: '',
            timeToElapse: '',
            reportedCases: '',
            totalHospitalBeds: '',
            periodType: ''
        };

        if(this.state.touched.population && population === '')
            errors.population = 'Population is < 4';
        if(this.state.touched.timeToElapse && timeToElapse === '')
            errors.timeToElapse = 'Population is < 4';
        if(this.state.touched.reportedCases && reportedCases === '')
            errors.reportedCases = 'Population is < 4';
        if(this.state.touched.totalHospitalBeds && totalHospitalBeds === '')
            errors.totalHospitalBeds = 'Population is < 4';
        if(this.state.touched.periodType && periodType === '')
            errors.periodType = 'Population is < 4';

        return errors;   
    }
    handleSubmit(event){
        if ((this.validate().population && this.validate().timeToElapse && this.validate().reportedCases && this.validate().totalHospitalBeds && this.validate().periodType) === ''){
            alert('Form Submitted');    
        }else{
           alert('Recheck Your Form');
        };
        event.preventDefault();
    }
    render(){
        const errors = this.validate(this.state.population, this.state.timeToElapse, this.state.reportedCases, this.state.totalHospitalBeds, this.state.periodType);
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send Us Your Data</h3>
                    </div>
                    <div>
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='population' md={2}>Population</Label>
                                <Col md={10}>
                                    <Input type='number' id='population' name='population'
                                    placeholder='Population'
                                    value={this.state.population}
                                    valid={errors.population === ''}
                                    invalid={errors.population !== ''}
                                    onBlur={this.handleBlur('population')}
                                    onChange={this.handleInputChange}
                                    attribute='data-population'/>
                                <FormFeedback>{errors.population}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='timeToElapse' md={2}>Time To Collect Data</Label>
                                <Col md={10}>
                                    <Input type='number' id='timeToElapse' name='timeToElapse'
                                    placeholder='Time to collect data'
                                    value={this.state.timeToElapse}
                                    valid={errors.timeToElapse === ''}
                                    invalid={errors.timeToElapse !== ''}
                                    onBlur={this.handleBlur('timeToElapse')}
                                    onChange={this.handleInputChange} 
                                    attribute='data-time-to-elapse'/>
                                    <FormFeedback>{errors.timeToElapse}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='reportedCases' md={2}>Reported Cases</Label>
                                <Col md={10}>
                                    <Input type='number' id='reportedCases' name='reportedCases'
                                    placeholder='Reported Cases'
                                    value={this.state.reportedCases}
                                    valid={errors.reportedCases === ''}
                                    invalid={errors.reportedCases !== ''}
                                    onBlur={this.handleBlur('reportedCases')}
                                    onChange={this.handleInputChange} 
                                    attribute='data-reported-cases'/>
                                    <FormFeedback>{errors.reportedCases}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='totalHospitalBeds' md={2}>Total Number of Hospital Beds</Label>
                                <Col md={10}>
                                    <Input type='number' id='totalHospitalBeds' name='totalHospitalBeds'
                                    placeholder='Total Number of Hospital Beds'
                                    value={this.state.totalHospitalBeds}
                                    valid={errors.totalHospitalBeds === ''}
                                    invalid={errors.totalHospitalBeds !== ''}
                                    onBlur={this.handleBlur('totalHospitalBeds')}
                                    onChange={this.handleInputChange} 
                                    attribute='data-total-hospital-beds'/>
                                    <FormFeedback>{errors.totalHospitalBeds}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor='periodType' md={2}>Choose Period Type</Label>
                                <Col md={{size: 4, offset: 1}}>
                                        <Input type='select' id='periodType' name='periodType'
                                        value={this.state.periodType}
                                        valid={errors.periodType === ''}
                                        invalid={errors.periodType !== ''}
                                        onBlur={this.handleBlur('periodType')}
                                        onChange={this.handleInputChange}
                                        attribute='data-period-type'>
                                            <option>Choose...</option>
                                            <option>Days</option>
                                            <option>Weeks</option>
                                            <option>Months</option>
                                        </Input>
                                        <FormFeedback>{errors.periodType}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type='submit' name='Submit Button' color='secondary' onClick={this.handleSubmit} attribute='data-go-estimate'>
                                        Send Data
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Forms;